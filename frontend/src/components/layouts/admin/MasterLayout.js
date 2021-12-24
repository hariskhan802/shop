import React from 'react'

import Navbar from './Navbar';
import Sidebar  from './Sidebar';
import Footer from './Footer';
import '../../../assets/admin/css/styles.css';
import '../../../assets/admin/js/scripts';
import Routes from '../../../routes/Routes';
import { Route, Switch, Redirect} from 'react-router-dom';

const MasterLayout = () => {
    return (
        <div className='sb-nav-fixed'>
            <Navbar />
            <div id="layoutSidenav">
                <Sidebar />
                <div id="layoutSidenav_content">
                    <main>
                        <div class="container-fluid px-4">
                           <Switch>
                                {Routes.map(function(route, idx){
                                    return (
                                        route.components && (
                                            <Route
                                                key={idx}
                                                path={route.path}
                                                exact={route.exact}
                                                name={route.name}
                                                render={(props) => (
                                                    <route.component {...props} />
                                                )}
                                            />
                                        )
                                    )
                                })}
                                <Redirect from="admin" to="/admin/dashboard" />
                           </Switch>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
            
        </div>
        
    
    
    )
}

export default MasterLayout
