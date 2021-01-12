import React from "react";
import { Upload, Icon } from "antd";
const Cloud = require("leancloud-storage");

Cloud.init({
  appId: "MPDqrLOsJwNgIoAdUYlA4ufP-gzGzoHsz",
  appKey: "UOpSw7ILtuBYldhacX0Rllxk",
  serverURL: "https://mpdqrlos.lc-cn-n1-shared.com",
});
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
class MyUpload extends React.Component {
  state = {
    loading: false,
  };

  handleChange = (info) => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
        this.setState({
          imageUrl,
          loading: false,
        })
      );
    }
  };

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        onChange={this.handleChange}
        customRequest={(info) => {
          // 自定义图片上传方式
          console.log(info);
          getBase64(info.file, (imageUrl) => {
            const data = { base64: imageUrl };
            // resume.txt 是文件名
            const file = new Cloud.File("cfyimg.png", data); // 构建的leancloud文件对象
            file.save().then((res) => {
              console.log(res);
              this.props.handleImg(res.attributes.url);
              this.setState({
                // 拿到leancolud存储的在线地址，作为预览图进行展示
                imageUrl: res.attributes.url,
                loading: false,
              });
            });
          });
        }}
      >
        {imageUrl || this.props.initimg ? (
          <img
            src={imageUrl || this.props.initimg}
            alt="avatar"
            style={{ width: "100%" }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    );
  }
}
export default MyUpload;
