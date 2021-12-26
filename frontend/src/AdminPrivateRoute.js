import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import MasterLayout from './components/layouts/admin/MasterLayout';

export const AdminPrivateRoute = ({...rest}) => {
    console.log(rest);
    return (
        <Route {...rest} 
        render={({props, location}) => 
                localStorage.getItem('auth_item') ? 
                (<MasterLayout {...props} />) : 
                (<Redirect to={ {pathname: '/login', state: {from: location} } } />)
        } />
    )
}
export default AdminPrivateRoute;