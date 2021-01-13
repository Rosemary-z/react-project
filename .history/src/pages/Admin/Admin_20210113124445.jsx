import React, { Component } from "react";
// import StoreUtils from "../../utils/storeUtils";
import { Layout } from "antd";
import { Redirect, Route, Switch } from "react-router-dom";
import SideHeader from "./components/header/header";
import HomeHeader from "../../components/header";
import LeftNav from "./components/leftnav/leftnav";
import menuList from "../../config/menuConfig.js";
import { connect } from "react-redux";
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeList: [],
    };
  }
  componentDidMount() {
    let arr = [];
    menuList.forEach((item) => {
      if (!item.children) {
        arr.push(item);
      } else {
        arr = [...arr, ...item.children];
      }
    });
    console.log("一维数据包", arr);
    this.setState({
      routeList: arr,
    });
  }
  render() {
    const { Footer, Sider, Content } = Layout;
    // console.log("admin组件props", this.props);
    //在render渲染函数里面，判断是否存在localstorage值，如果不存在，则重定向到登录页面
    // const user = StoreUtils.getUser();
    // if (!user || !user.id) {
    //   return <Redirect to="/login" />;
    // }
    // 提取状态机里的isLogin数据，true则放行
    let { isLogin } = this.props.user;
    if (!isLogin) {
      return <Redirect to="/login" />;
    }
    let { role } = this.props.user.userInfo;
    return (
      <Layout style={{ height: "100%" }}>
        <Sider>
          <SideHeader />
          <LeftNav />
        </Sider>
        <Layout>
          <HomeHeader />
          <Content>
            <Switch>
              {this.state.routeList.map((item) => {
                let bool = item.roles.includes(role);

                return bool ? (
                  <Route path={item.key} component={item.component} />
                ) : (
                  ""
                );
              })}
              {/* <Redirect from="*" to="/home" /> */}
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps)(Admin);
