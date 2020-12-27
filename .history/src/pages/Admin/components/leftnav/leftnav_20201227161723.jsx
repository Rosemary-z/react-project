import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Menu, Icon } from "antd";
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
        const cItem = item.children.find((cItem) =>  cItem.key === path
        )
        if (cItem) { 
          this.openKey = item.key
        }
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
  UNSAFE_componentWillMount() { 
    this.getNodes = this.getMenuList(menuList);
  }
  render() {
    const path = this.props.location.pathname;
    const getNodes = this.getNodes;
    const openKey = this.openKey;
    // alert(openKey);
    // render先于执行menuList函数之前，所以undefined
    return (
      <div>
        <Menu
          defaultSelectedKeys={[path]}
          defaultOpenKeys={[openKey]}
          mode="inline"
          theme="dark"
        >
          { getNodes}
        </Menu>
      </div>
    );
  }
}

export default withRouter(LeftNav);
