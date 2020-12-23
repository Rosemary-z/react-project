import React, { Component } from 'react';
import Header from './Header/Header';
import { Form, Icon, Input, Button} from 'antd';
import './Login.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
     handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
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
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
                </div>
            </div>
          );
    }
}
 
export default Form.create()(Login);