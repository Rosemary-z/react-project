import React, { Component } from 'react';
import Header from './Header/Header';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { Redirect } from 'react-router-dom';
import './Login.css';
import { reqLogin } from '../../api';
import StoreUtils from '../../utils/storeUtils';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
  }
  // 表单提交事件
    handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // 拿到values里面的用户名和密码信息
        const { username, password } = values;
        // 发起axios请求，拿到后端返回的数据，
        const res = await reqLogin(username, password);
        console.log(res);
        // 判断后端返回的接口数据状态，status=1表示用户存在，否则不存在
        if (res.data.status === 0) {
          // 提示登录成功
          message.success('登录成功', 1);
          // 存储localstorage
          const user = res.data.data;
          StoreUtils.saveUser(user);
          // 页面跳转-> admin
          this.props.history.replace('/');
        } 
      }
    });
  };
  // 自定义表单验证规则
  // validateRules = (rule, value, callback) => { 
  //   // console.log(value);
  //   if (!value) {
  //     callback('用户名必须输入')
  //   } else if (value.length < 4) {
  //     callback('用户名不得少于4位')
  //   } else if (value.length > 8) {
  //     callback('用户名不得多于8位')
  //   } else if (!/^[\w]{4,8}$/.test(value)) {
  //     callback('用户名由任意数字字母下划线构成')
  //   } else { 
  //     callback()
  //   }
  // }
  render() {
        // 进行判断,在已登陆状态下，不能会退到login页面。直接跳转到首页，使用重定向设置。
        const user = StoreUtils.getUser();
        if (user && user._id) {
          //证明已经登陆过了,跳转到首页
          return <Redirect to="/" />;
        }
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login" >
                <Header history={ this.props.history}/>  
            <div className="login-content">
            <h3>用户登录</h3>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [
                    { required: true, message: '请输入用户名!' },
                    { min: 4, message: '最少4位' },
                      { max: 8, message: '最多8位' },   
                    {validator:this.validateRules  }
                  ],
                  validateTrigger:'onBlur',//input输入框失去焦点时触发校验规则
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="用户名"
                  />,
                )}
              </Form.Item>
            <Form.Item>
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: '请输入密码!' },
              // { pattern: /^\d{6,8}$/, message: '密码为5-8位数字' },
            ],
            validateTrigger:'onBlur',
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
        </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
          })(<Checkbox>记住我</Checkbox>)}
            <a className="login-form-forgot" href="www.baidu.com">
           忘记密码
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
            <a href="www.baidu.com">没有账号？点击注册</a>
            </Form.Item>
        </Form>
      </div>
    </div>
        );
    }
}

 
export default Form.create()(Login);