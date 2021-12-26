import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const Navbar = () => {
    const history = useHistory();
    const logout = () => {
        
        axios.get('/api/logout', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('auth_token')
            }
        }).then(res => {
            console.log(res);
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_id');
                localStorage.removeItem('auth_email');
                localStorage.removeItem('auth_name');
                localStorage.removeItem('auth_image');
                swal('Success', res.data.message, 'success');   
                history.push('/login');
            }
        });
    }
    var authButton = '';
    if(!localStorage.getItem('auth_token'))
    {
        authButton = (<ul><li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li></ul>);
    }
    else{
        authButton = (<li><button className="btn btn-danger" type='button' onClick={logout}>Logout</button></li>);
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
            <div className='container'>
                <Link className="navbar-brand" to="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home </Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Link</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Collections</Link>
                        </li>
                       {authButton}
                        
                    </ul>
                    
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}


export default Navbar