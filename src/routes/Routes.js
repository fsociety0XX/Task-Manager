import React, { Component } from 'react'
import '../scss/app.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/Sidebar';
import Dashboard from '../Components/pages/Dashboard';
import ViewTask from '../Components/Tasks/ViewTask';
import Chart from '../Components/pages/ReportGenerator';

class Routes extends Component {
    render() {
        return (
            <>
            <Router>
                <Sidebar/>
                <Switch>
                    <Route path="/" exact component={Dashboard}/>
                    <Route path="/tasks/view/:id" component={ViewTask} />
                    <Route path="/reports" component={Chart} />
                </Switch>
            </Router>
            </>
        )
    }
}

export default Routes;
