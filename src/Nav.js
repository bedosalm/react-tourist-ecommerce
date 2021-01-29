import React , {Component} from "react";
import {Link} from 'react-router-dom';
import './Nav.css';
import { menuItems } from "./menuItems"

class Nav extends Component {
 state = {
     clicked : false
 }

 handelClick = () => {
     this.setState({
         clicked : !this.state.clicked 
     })
 }
    render(){
        return (
            <nav className="Navbar-item">
               <div className="logo">
                   <h3>ILEXA Beach</h3>
               </div>
               <div className="menu-icon" onClick={this.handelClick}>
                 <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
               </div>
               <ul className={this.state.clicked ? "items-List active" : "items-List"}>
                  {menuItems.map((item,index) => {
                      return (
                        <Link to={item.path} key={index} className={item.cName} >
                        <li >
                          {item.Title}
                        </li>
                        </Link>
                      )
                  })}
                </ul>
            </nav>
       )
    }
}

export default Nav