import React, { Component } from "react";
import { Table, Tag, Card, Button } from "antd";
import { getCategoryList } from "../../../api/job.js";
import "./catelist.css";
let routeObj = null;
const columns = [
  {
    title: "分类ID",
    dataIndex: "objectId",
    key: "objectId",
  },
  {
    title: "分类名称",
    dataIndex: "cfyname",
    key: "cfyname",
  },
  {
    title: "归属分类",
    key: "cfytype",
    dataIndex: "cfytype",
    render: (cfytype, record) => {
      //   console.log(cfytype,record);
      let color = cfytype === "0" ? "geekblue" : "green";
      let text = cfytype === "0" ? "实习" : "兼职";
      return (
        <Tag color={color} key={cfytype}>
          {text}
        </Tag>
      );
    },
  },
  {
    title: "操作",
    key: "action",
    render: (text, record) => (
      <span>
        <Button
          type="primary"
          shape="round"
          size="small"
          onClick={() => {
            console.log(routeObj);
            routeObj.history.push({
              pathname: "/product/editcategory",
              state: record,
            });
          }}
        >
          编辑
        </Button>
        <Button type="danger" shape="round" size="small">
          删除
        </Button>
      </span>
    ),
  },
];

export default class CateList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    routeObj = this.props;
    getCategoryList().then((res) => {
      console.log(res);
      this.setState({
        data: res.data.results,
      });
    });
  }
  render() {
    let { data } = this.state;
    return (
      <Card>
        <Table
          columns={columns}
          dataSource={data}
          rowKey={(record) => record.objectId}
        />
      </Card>
    );
  }
}
