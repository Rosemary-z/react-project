import axios from 'axios';
export default function ajax(url, data = {}, type = 'GET') { 
    // data默认传入一个对象，type默认为get请求
    // 判断请求类型
    if (type === 'GET') {
        return axios.get(url, {// 这个返回值是一个promise对象
            params: data
        })
    } else { 
        return axios.post(url,data)
    }
}