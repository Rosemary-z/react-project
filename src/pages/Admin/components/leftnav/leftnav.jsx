import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Menu, Icon } from "antd";
import menuList from "../../../../config/menuConfig";
const { SubMenu } = Menu;
class Leftnav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getMenuList = (menuList) => {
    const path = this.props.location.pathname;
    return menuList.map((item) => {
      if (!item.children) {
        //如果不存在子菜单，说明只有一级菜单
        return (
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        );
      } else {
        //如果有children，说明是有子菜单的
        const cItem = item.children.find((cItem) => cItem.key === path);
        if (cItem) {
          this.openKey = item.key;
        }
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
          >
            {this.getMenuList(item.children)}
          </SubMenu>
        );
      }
    });
  };
  // 这个生命周期函数是在render之前执行的
  componentWillMount() {
    this.getNodes = this.getMenuList(menuList);
  }
  render() {
    const path = this.props.location.pathname;
    const getNodes = this.getNodes;
    const openKey = this.openKey;
    return (
      <div>
        <Menu
          selectedKeys={[path]}
          defaultOpenKeys={[openKey]}
          mode="inline"
          theme="dark"
        >
          {getNodes}
        </Menu>
      </div>
    );
  }
}

export default withRouter(Leftnav);
