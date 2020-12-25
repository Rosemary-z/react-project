import React, { Component } from "react";
import logo from "../../../../assets/images/logo.png";
import "./header.css";
class SideHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="side-header">
        <img src={logo} alt="" />
        <span>管理后台</span>
      </div>
    );
  }
}

export default SideHeader;
