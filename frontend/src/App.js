import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/frontend/Home';
import MasterLayout from './components/layouts/admin/MasterLayout';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/admin" name="Admin" render={(props) => <MasterLayout {...props} />} />
            </Switch>
        </Router>
    )
}

export default App
