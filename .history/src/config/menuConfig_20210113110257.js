// import SideHeader from "../pages/Admin/components/header";
// import HomeHeader from "../components/header";
// import LeftNav from "../pages/Admin/components/leftnav/leftnav";
import Home from "../pages/Admin/home/home";
import User from "../pages/Admin/user/user";
import Role from "../pages/Admin/role/role";
import Bar from "../pages/Admin/charts/bar";
import Line from "../pages/Admin/charts/line";
import Pie from "../pages/Admin/charts/pie";
import Order from "../pages/Admin/order/order";
import Category from "../pages/Admin/product/category";
import CateList from "../pages/Admin/product/catelist";
import EditCategory from "../pages/Admin/product/editcategory";
const menuList = [{
    title: '首页', // 菜单标题名称
    key: '/home', // 对应的path
    icon: 'home', // 图标名称
    isPublic: true, // 公开的
    component: Home,
    role: ['root', 'admin', 'worker']
  },
  {
    title: '分类管理',
    key: '/product',
    icon: 'appstore',
    children: [ // 子菜单列表
      {
        title: '发布分类',
        key: '/product/category',
        icon: 'bars',
        component: Category,
        role: ['root', 'admin', 'worker']
      },
      {
        title: '分类列表',
        key: '/product/catelist',
        icon: 'tool',
        component: CateList,
        role: ['root', 'admin', 'worker']
      },
      {
        title: '编辑列表',
        key: '/product/editcategory',
        icon: 'tool',
        component: EditCategory,
        role: ['root', 'admin', 'worker']
      },
    ]
  },

  {
    title: '用户管理',
    key: '/user',
    icon: 'user',
    component: User,
    role: ['root']
  },
  {
    title: '角色管理',
    key: '/role',
    icon: 'safety',
    component: Role,
    role: ['root']
  },

  {
    title: '图形图表',
    key: '/charts',
    icon: 'area-chart',
    children: [{
        title: '柱形图',
        key: '/charts/bar',
        icon: 'bar-chart',
        component: Bar,
        roles: ['root', 'admin']
      },
      {
        title: '折线图',
        key: '/charts/line',
        icon: 'line-chart',
        component: Line,
        roles: ['root', 'admin']
      },
      {
        title: '饼图',
        key: '/charts/pie',
        icon: 'pie-chart',
        component: Pie,
        roles: ['root', 'admin']
      },
    ]
  },

  {
    title: '订单管理',
    key: '/order',
    icon: 'windows',
    component: Order,
    roles: ['root', 'admin']
  },
]

export default menuList