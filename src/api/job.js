import request from './request.js';
// 录入岗位分类
// export const enterPC = (data) => { 
//     return request.post('/1.1/classes/positionList',data)
// }
// 查询职位列表
export const getPositionDetails = () => {
    return request.get('/1.1/classes/positionCategory ')
}