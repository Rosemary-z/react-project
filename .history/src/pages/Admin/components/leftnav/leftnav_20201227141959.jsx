import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { withRouter, Link } from "react-router-dom";
class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { SubMenu } = Menu;
    return (
      <div>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1", "sub2"]}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="1">
            <Link to="/home">
              <Icon type="pie-chart" />
              <span>首页</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>商品</span>
              </span>
            }
          >
            <Menu.Item key="2">
              <Link to="/category">
              <svg class="icon" aria-hidden="true">
<use xlink:href="#icon-index"></use></svg>
                <Icon type="appstore" />
                <span> 品类管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/product">
                <Icon type="appstore" />
                <span>商品管理</span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="4">
            <Link to="/user">
              <Icon type="desktop" />
              <span>用户管理</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/role">
              <Icon type="inbox" />
              <span>角色管理</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>图形图标</span>
              </span>
            }
          >
            <Menu.Item key="6">
              <Link to="/charts/line">
                <Icon type="appstore" />
                <span>折线图</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="7">
              <Link to="/charts/pie">
                <Icon type="appstore" />
                <span>饼状图</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="8">
              <Link to="/charts/bar">
                <Icon type="desktop" />
                <span>柱状图</span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Link to="/order">
              <Icon type="desktop" />
              <span>订单管理</span>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default withRouter(LeftNav);
