import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';
import Home from './components/frontend/Home';
import MasterLayout from './components/layouts/admin/MasterLayout';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route path="/admin" name="Admin" render={(props) => <MasterLayout {...props} />} />
            </Switch>
        </Router>
    )
}

export default App
