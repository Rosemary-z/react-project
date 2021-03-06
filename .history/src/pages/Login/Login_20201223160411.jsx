import React, { Component } from 'react';
import Header from './Header/Header';
import { Form, Icon, Input, Button,Checkbox} from 'antd';
import './Login.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
  }
  // 表单提交事件
    handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  // 自定义表单验证规则
  validateRules = (rule, value, callback) => { 
    // console.log(value);
    if (!value) {
      callback('用户名必须输入')
    } else if (value.length < 4) {
      callback('用户名不得少于4位')
    } else if (value.length > 8) {
      callback('用户名不得多于8位')
    } else if (!/^[\w]{4,8}$/.test(value)) {
      callback('用户名由任意数字字母下划线构成')
    } else { 
      callback()
    }
  }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <Header />  
            <div className="login-content">
            <h3>用户登录</h3>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [
                    // { required: true, message: '请输入用户名!' },
                    // { min: 4, message: '最少4位' },
                    //   { max: 8, message: '最多8位' },   
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
              { pattern: /^\d{6,8}$/, message: '密码为5-8位数字' },
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