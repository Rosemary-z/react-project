import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { withRouter, Link } from "react-router-dom";
import menuList from '../../../../fonfig/menuConfig';
const { SubMenu } = Menu;
class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getMenuList = (menuList) => {
    const path = this.props.location.pathname;
    return menuList.map((item) => {
      if (!item.children) {
        return (
          <Menu.Item key={item.key}>
          <Link to={item.key}>
            <Icon type={item.icon} />
            <span>{item.title}</span>
          </Link>
          </Menu.Item>
        )
      } else { 
        // const cItem = item.children.find((cItem) =>  cItem.key === path
        // )
        return (
          <SubMenu
          key={ item.key}
        title={
          <span>
            <Icon type={ item.icon} />
            <span>{ item.title}</span>
          </span>
        }
      >
        {this.getMenuList(item.children)}
          </SubMenu>
        )
      }
     })
   }
  render() {
    const { path } = this.props.location.pathname;
    return (
      <div>
        <Menu
          defaultSelectedKeys={[path]}
          defaultOpenKeys={["sub1", "sub2"]}
          mode="inline"
          theme="dark"
        >
          { this.getMenuList(menuList)}
        </Menu>
      </div>
    );
  }
}

export default withRouter(LeftNav);
