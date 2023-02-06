import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home';
import Content from './Content';
import Contact from './Contact';
import About from './About';
export default class Approute extends Component {
    render() {
        return (
            <div>
                <Switch>
                    {this.dashboardRoutes()}
                </Switch>
            </div>
        )
    }

    dashboardRoutes()
    {
        return (
                <React.Fragment>
                    <Route exact path='/' component={Home} />
                    <Route path='/:slug' component={Content} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/about' component={About} />
                </React.Fragment>
        )
    }
}
