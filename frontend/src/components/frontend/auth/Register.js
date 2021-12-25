import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from '../../layouts/frontend/Navbar';
import axios from 'axios';
const Register = () => {
    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
    });
    const handleInput = (e) => {
        e.presist();
        setRegister({...registerInput, [e.target.name]: e.target.value})
    }
    const registerSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }
        axios.post('/api/register', data).then(res => {

        });
    }
    return (
            <div classNameName='register'>
                <Navbar />
                <div className='container'>
                    <h2>Register</h2>
                    <form onSubmit={registerSubmit}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" className="form-control" onChange={handleInput} value={registerInput.name} placeholder="Name" />
                        </div>
                        
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" onChange={handleInput} value={registerInput.email}   placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" onChange={handleInput} value={registerInput.password}  placeholder="Password" />
                        </div>
                        
                        
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>            
    )
}
export default Register;