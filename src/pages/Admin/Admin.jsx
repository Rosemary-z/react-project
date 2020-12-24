import React, { Component } from 'react';
// import StoreUtils from '../../utils/storeUtils';
// import { Redirect } from 'react-router-dom';
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        //在render渲染函数里面，判断是否存在localstorage值，如果不存在，则重定向到登录页面
        // const user = StoreUtils.getUser();
        // if (!user || !user.id) {
        //     return <Redirect to="/login" />
        //  }
        return ( 
            <div>admin</div>
         );
    }
}
 
export default Admin;