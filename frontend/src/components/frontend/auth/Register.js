import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from '../../layouts/frontend/Navbar';
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const history = useHistory();
    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        errors: [],
    });
    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value});
    }
    const registerSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }
        // axios.post('http://localhost/shop/backend/public/api/register', data).then(res => {
        axios.post('/api/register', data).then(res => {
        console.log(res.data);    
        if (res.data.status === 200) {
            localStorage.setItem('auth_token', res.data.token);
            localStorage.setItem('auth_id', res.data.id);
            localStorage.setItem('auth_email', res.data.email);
            localStorage.setItem('auth_name', res.data.name);
            localStorage.setItem('auth_image', res.data.image);
            swal('Success', res.data.message, 'success');
            console.log(history.push('/'));
        }
        else {
            setRegister({...registerInput, errors: res.data.errors})
        }
        })/*.catch(res => {
            console.log(res);
        })*/;
    }
    return (
            <div className='register'>
                <Navbar />
                <div className='container'>
                    <h2>Register</h2>
                    <form onSubmit={registerSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" className="form-control" onChange={handleInput} value={registerInput.name} placeholder="Name" />
                            <span className='text-danger'>{registerInput.errors.name}</span>
                        </div>
                        
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email"  name="email" className="form-control" onChange={handleInput} value={registerInput.email}   placeholder="Enter email" />
                            <span className='text-danger'>{registerInput.errors.email}</span>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password"  name="password" className="form-control" onChange={handleInput} value={registerInput.password}  placeholder="Password" />
                            <span className='text-danger'>{registerInput.errors.password}</span>
                        </div>
                        
                        
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>            
    )
}
export default Register;