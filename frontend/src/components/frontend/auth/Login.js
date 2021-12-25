import React from 'react';
import Navbar from '../../layouts/frontend/Navbar';
const Login = () => {
    return (
        <div classNameName='register'>
                <Navbar />
                <div className='container'>
                    <h2>Login</h2>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control"  placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
    )
}
export default Login;