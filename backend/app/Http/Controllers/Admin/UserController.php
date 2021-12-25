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
            return $validated->errors();
        }
        $inputs['password'] = bcrypt($inputs['password']);
        $user = \App\Models\User::create($inputs);
        $user->token = $user->createToken('MyApp')->accessToken;
        // $user->createToken('MyApp')->accessToken;
        return $user;
    }
    public function login(Request $request){
        $inputs = $request->all();
        
        $validated = \Validator::make($inputs, [
            'email' => 'required',
            'password' => 'required',
            
        ]);
        if ($validated->fails()) {
            return $validated->errors();
        }
        $user = \App\Models\User::where('email', $inputs['email'])->first();
        // dd($user);
        if (\Hash::check($inputs['password'], $user->password)) {
            $user->token = $user->createToken('MyApp')->accessToken;    
            return $user;
        }
        else{
            return ['result' => 'Email or password is incorrect!'];
        }
        // $user->createToken('MyApp')->accessToken;
    }
}