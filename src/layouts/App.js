import React, {Component} from 'react'
import ReactDOM,{render} from 'react-dom'
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import './App.css'
import Navmenu from './navmenu.js'
class App extends Component{
    render(){
        return(
            <div>
                  <Navmenu/>
                 <div className="main">
                     <ReactCSSTransitionGroup
                         className="app"
                         component="div"
                         transitionName="app"
                         transitionEnterTimeout={500}
                         transitionLeaveTimeout={300}
                         >
                         <div className="content" key={this.props.location.pathname} >
                          {this.props.children}
                         </div>
                     </ReactCSSTransitionGroup>
                 </div>

            </div>
        )
    }
}

export default App