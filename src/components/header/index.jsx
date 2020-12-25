import React, { Component } from "react";
import "./index.css";
import StoreUtils from "../../utils/storeUtils";
import { getCurrentTime } from "../../utils/timeUtils";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: getCurrentTime(Date.now()),
    };
  }
  // 设置获取当前时间的函数
  getTime = () => {
    this.interval = setInterval(() => {
      const currentTime = getCurrentTime(Date.now());
      // 修改state中的currentTime值
      this.setState({
        currentTime,
      });
    }, 1000);
  };
  // 数据变动，重新渲染页面，放到生命周期函数中
  componentDidMount() {
    this.getTime();
  }
  render() {
    const { username } = StoreUtils.getUser();
    const { currentTime } = this.state;
    return (
      <div className="home-header">
        <div className="home-header-top">
          <span className="logout">退出</span>
          <span className="welcome">欢迎,{username}</span>
        </div>
        <div className="home-header-bottom">
          <h2>首页</h2>
          <p>
            <span>{currentTime}</span>
            <span>weather</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
