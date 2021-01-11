import React from "react";
import { Form, Select, Input, Button, message } from "antd";
import { enterPC } from "../../../api/job.js";
const { Option } = Select;

class Category extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
      enterPC(values).then((res) => {
        console.log(res);
        if (res.status !== 201) {
          message.error("录入职位分类失败");
        } else {
          message.success("录入职位分类成功");
        }
      });
    });
  };

  handleSelectChange = (value) => {
    console.log(value);
    // this.props.form.setFieldsValue({
    //   note: `Hi, ${value === "male" ? "man" : "lady"}!`,
    // });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 12 }}
        onSubmit={this.handleSubmit}
      >
        <Form.Item label="分类名称" name="cfyname">
          {getFieldDecorator("cfyname", {
            rules: [{ required: true, message: "请输入分类名称" }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="归属分类" name="cfytype">
          {getFieldDecorator("cfytype", {
            rules: [{ required: true, message: "请输入归属分类" }],
          })(
            <Select
              placeholder="请选择归属岗位类型"
              onChange={this.handleSelectChange}
            >
              <Option value="0">全职</Option>
              <Option value="1">实习</Option>
              <Option value="2">兼职</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedApp = Form.create({ name: "coordinated" })(Category);
export default WrappedApp;
