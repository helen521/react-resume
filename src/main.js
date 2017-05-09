
// spa的入口文件
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {render} from "react-dom"
import './main.css'
import Route from './routes/Routes.js'

class Main extends Component{
    render(){
        return(
            <div>
                <Route/>
            </div>
        )
    }
}

render(<Main/>,document.getElementById('app'))

