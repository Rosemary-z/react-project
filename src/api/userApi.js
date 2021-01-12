import request from './request.js';
// 登录请求
export const userLogin = (data) => {
    return request.post('/1.1/login', data)
}