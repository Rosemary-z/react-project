import React, { Component } from 'react';
import './Header.css';
import logo from '../../../assets/images/logo.png';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header">
                    <img src={logo} alt="" />
                    <span>React项目: 后台管理系统</span>
            </div>
         );
    }
}
 
export default Header;