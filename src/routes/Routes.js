import React ,{Component}from "react"
import {Router,Route,IndexRoute,browserHistory} from "react-router"

import App from '../layouts/App.js'
import Skills from '../containers/Skill.js'
import Contact from '../containers/Contact.js'
import About from '../containers/About.js'
import Project from '../containers/Project.js'
import Home from '../containers/Home.js'

export default class Rt extends Component {
    render() {
        return (
            <Router  history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="skills" component={Skills}/>
                <Route path="contact" component={Contact}/>
                <Route path="about" component={About}/>
                <Route path="project" component={Project}/>
            </Route>
        </Router>
        )
    }
}