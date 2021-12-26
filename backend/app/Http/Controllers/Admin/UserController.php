<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    public function register(Request $request){
        $inputs = $request->all();
        $inputs['image'] = '';
        $validated = \Validator::make($inputs, [
            'name' => 'required|max:20',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            
        ]);
        if ($validated->fails()) {
            return response()->json(['errors' => $validated->messages()]);
        }
        $inputs['password'] = bcrypt($inputs['password']);
        $user = \App\Models\User::create($inputs);
        $user->token = $user->createToken('MyApp')->accessToken;
        return response()->json([
            'name' => $user->name,
            'email' => $user->email,
            'id' => $user->id_hash,
            'image' => $user->image,
            'token' => $user->token,
            'message' => 'Register Successfully',
            'status' => 200,
        ], 200);
    }
    public function login(Request $request){
        $inputs = $request->all();
        
        $validated = \Validator::make($inputs, [
            'email' => 'required',
            'password' => 'required',
            
        ]);
        if ($validated->fails()) {
            
            return response()->json([
                'errors' => $validated->messages(),
            ]);
        }
        $user = \App\Models\User::where('email', $inputs['email'])->first();
        // dd($user);
        if (\Hash::check($inputs['password'], $user->password)) {
            $user->token = $user->createToken('MyApp')->accessToken;
            return response()->json([
                'name' => $user->name,
                'email' => $user->email,
                'id' => $user->id_hash,
                'image' => $user->image,
                'token' => $user->token,
                'message' => 'Login Successfully',
                'status' => 200,
            ], 200);   
        }
        else{
            return response()->json([
                'errors' => ['credentials' => 'Email or password is incorrect!'],
                
            ]);
        }
        // $user->createToken('MyApp')->accessToken;
    }
    public function logout(){
        if (\Auth::user()->token()->revoke()) {
            return response()->json([
                'status' => 200,
                'message' => "Logged out successfully",
            ]);
        }
        
    }
}