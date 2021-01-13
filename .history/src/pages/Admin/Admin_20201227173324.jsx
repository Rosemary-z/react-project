import React, { Component } from "react";
// import StoreUtils from '../../utils/storeUtils';
// import { Redirect } from 'react-router-dom';
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
import Product from "./product/product";
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { Footer, Sider, Content } = Layout;
    //在render渲染函数里面，判断是否存在localstorage值，如果不存在，则重定向到登录页面
    // const user = StoreUtils.getUser();
    // if (!user || !user.id) {
    //     return <Redirect to="/login" />
    //  }
    return (
      <Layout style={{ height: "100%" }}>
        <Sider>
          <SideHeader />
          <LeftNav />
        </Sider>
        <Layout>
          <HomeHeader history={this.props.history} />
          {/* HomeHeader 如果没有包装成一个路由组件，可以通过传递history方式，传递给子组件，避免路由跳转出现错误 */}
          <Content>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/user" component={User} />
              <Route path="/role" component={Role} />
              <Route path="/order" component={Order} />
              <Route path="/category" component={Category} />
              <Route path="/product" component={Product} />
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

export default Admin;
