// 封装aixos请求
import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://mpdqrlos.lc-cn-n1-shared.com',
    timeout: 1000,
    headers: {
        "X-LC-Id": "MPDqrLOsJwNgIoAdUYlA4ufP-gzGzoHsz",
        "X-LC-Key": "UOpSw7ILtuBYldhacX0Rllxk",
        "Content-Type": "application/json",
    }
})
export default instance;