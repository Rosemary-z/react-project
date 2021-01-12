import request from './request.js';
// 录入岗位分类
export const enterPC = (data) => {
    return request.post('/1.1/classes/positionCategory', data)
}
// 查询分类列表
export const getCategoryList = () => {
    return request.get('/1.1/classes/positionCategory')
}
// 修改分类
export const editCate = (objectId,data) => {
    return request.put(`/1.1/classes/positionCategory/${objectId}`,data)
}