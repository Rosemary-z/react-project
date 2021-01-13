import React from "react";
import { Form, Select, Input, Button, message } from "antd";
import { editCate } from "../../../api/job.js";
import MyUpload from "../../../components/MyUpload/index";
const { Option } = Select;

class EditCategory extends React.Component {
  handleSubmit = (e) => {
    let { objectId } = this.props.location.state;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      // 追加imgurl字段
      values.cfyimg = this.state.cfyimg;
      console.log("追加图片在线地址之后的表单values值", values);
      if (!err) {
        console.log("Received values of form: ", values);
      }
      editCate(objectId, values).then((res) => {
        if (res.status !== 200) {
          message.error("修改分类失败");
        } else {
          message.success("修改分类成功");
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
  componentDidMount() {
    // console.log(this.props);
    this.props.form.setFieldsValue({
      //设置表单初始值
      cfyname: this.props.location.state.cfyname,
      cfytype: this.props.location.state.cfytype,
    });
  }
  handleImg = (cfyimg) => {
    console.log(cfyimg);
    console.log("编辑页面获取的图片路径", cfyimg);
    this.setState({ cfyimg });
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
              <Option value="0">实习</Option>
              <Option value="1">兼职</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          <MyUpload
            handleImg={this.handleImg}
            initimg={this.props.history.location.state.cfyimg}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" htmlType="submit">
            确认修改
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedApp = Form.create({ name: "coordinated" })(EditCategory);
export default WrappedApp;
