import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MasterLayout from './components/layouts/admin/MasterLayout';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/admin/dashboard" name="Admin" render={(props) => <MasterLayout {...props} />} />
                
            </Switch>
        </Router>
    )
}

export default App
