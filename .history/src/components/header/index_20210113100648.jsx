import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./index.css";
import StoreUtils from "../../utils/storeUtils";
import { getCurrentTime } from "../../utils/timeUtils";
import { Modal } from "antd";
import { connect } from "react-redux";
import { loginFail } from "../../action";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: getCurrentTime(Date.now()),
      visible: false,
    };
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };
  // 确认消除localstorage
  handleOk = () => {
    // StoreUtils.removeUser();
    this.props.loginFail(); // 触发登录失败reducer，触发状态机数据变化
    this.setState({
      visible: false,
    });

    // 跳转回登录页面
    // 这里需要将header组件包装成一个路由组件来导出，不然路径跳转会报错。
    // 另外一种解决方式，在引入Header的地方，加入history={ this.props.history}属性设置
    this.props.history.push("/login");
  };
  // 点击取消关闭弹窗
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
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
          {/* <span className="logout">退出</span> */}
          <span className="logout" onClick={this.showModal}>
            退出
          </span>
          <span className="welcome">欢迎,{username}</span>
        </div>
        <div className="home-header-bottom">
          <h2>首页</h2>
          <p>
            <span>{currentTime}</span>
            <span>weather</span>
          </p>
        </div>
        <Modal
          title="退出登录"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="确认"
          cancelText="取消"
        >
          <p>您确定要退出吗</p>
        </Modal>
      </div>
    );
  }
}
// function confirm() {
//   Modal.confirm({
//     content: "您确定要退出吗",
//     okText: "确认",
//     cancelText: "取消",
//   });
// }

export default connect(null, { loginFail })(withRouter(Header));
