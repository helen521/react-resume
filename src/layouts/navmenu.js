import React, {Component} from 'react'
import ReactDOM,{render} from 'react-dom'
import {Menu,Icon} from 'antd'
import {Link} from "react-router"
import './navmenu.css'
class Navmenu extends Component{
    getMenuItems(data){
        return data.map((info)=>{
            return (
                <Menu.Item  key={info.name}>
                    <Link to={info.name=="home"? "/":info.name}>
                        <span className="nav-text">{info.desc}</span>
                    </Link>
                </Menu.Item>
            )
        })
    }

    render(){
           const data=[
               {name:"home",desc:"首页"},
               {name:"skills",desc:"工作经验"},
               {name:"project",desc:"项目经验"},
               {name:"contact",desc:"联系我"},
               {name:"about",desc:"关于我"}
           ]

        return(
            <div>
                <aside className="layout-aside">
                    <div className="layout-logo" >
                       <i className="logo"> </i>
                       <span className="title-text">  </span>
                    </div>
                    <Menu mode="inline"
                          theme="dark"
                          defaultOpenKeys={["home"]}
                          selectedKeys={["home"]}
                        >
                        {this.getMenuItems(data)}

                    </Menu>

                    <div className="aside-action">
                       <Icon type="right"/>
                        footer
                    </div>
                </aside>



            </div>
        )
    }
}

export default Navmenu