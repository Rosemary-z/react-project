import React, { Component } from "react";
// import StoreUtils from "../../utils/storeUtils";
import { Layout } from "antd";
import SideHeader from "./components/header/header";
import HomeHeader from "../../components/header";
import LeftNav from "./components/leftnav/leftnav";
import Home from "./home/home";
import { Redirect, Route, Switch } from "react-router-dom";
import User from "./user/user";
import Role from "./role/role";
import Bar from "./charts/bar";
import Line from "./charts/line";
import Pie from "./charts/pie";
import Order from "./order/order";
import Category from "./product/category";
import CateList from "./product/catelist";
import EditCategory from "./product/editcategory";
import { connect } from "react-redux";
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { Footer, Sider, Content } = Layout;
    console.log("admin组件props", this.props);
    //在render渲染函数里面，判断是否存在localstorage值，如果不存在，则重定向到登录页面
    // const user = StoreUtils.getUser();
    // if (!user || !user.id) {
    //   return <Redirect to="/login" />;
    // }
    // 提取状态机里的isLogin数据，true则放行
    // let { isLogin } = this.props.user;
    // if (!isLogin) {
    //   return <Redirect to="/login" />;
    // }
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
              <Route path="/home" component={Home} />
              <Route path="/user" component={User} />
              <Route path="/role" component={Role} />
              <Route path="/order" component={Order} />
              <Route path="/product/category" component={Category} />
              <Route path="/product/catelist" component={CateList} />
              <Route path="/product/editcategory" component={EditCategory} />
              <Route path="/charts/bar" component={Bar} />
              <Route path="/charts/line" component={Line} />
              <Route path="/charts/pie" component={Pie} />
              <Redirect to="/home" />
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
