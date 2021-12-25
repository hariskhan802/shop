import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../layouts/frontend/Navbar';
import swal from 'sweetalert';

const Login = () => {

    const [loginInput, setLogin] = useState({
        email : '',
        password : '',
        errors: [],
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value})
    }
    const loginSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }
        axios.post('/api/login', loginInput).then(res => {
            if (res.data.status === 200) {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_id', res.data.id);
                localStorage.setItem('auth_email', res.data.email);
                localStorage.setItem('auth_name', res.data.name);
                localStorage.setItem('auth_image', res.data.image);
                swal('Success', res.data.message, 'success');
                console.log(history.push('/'));
            }else{
                
                setLogin({...loginInput, errors: res.data.errors});
            }
        });
    }
    return (
        <div className='login'>
                <Navbar />
                <div className='container'>
                    <h2>Login</h2>
                    <form onSubmit={loginSubmit}>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" name='email' className="form-control" onChange={handleInput} value={loginInput.email} placeholder="Enter email" />
                            <span className='text-danger'>{loginInput.errors.email}</span>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name='password' className="form-control" onChange={handleInput} value={loginInput.password} placeholder="Password" />
                            <span className='text-danger'>{loginInput.errors.password}</span>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Login</button>
                        <div> 
                            <span className='text-danger'>{loginInput.errors.credentials}</span>
                        </div>
                    </form>
                </div>
            </div>
    )
}
export default Login;