/* eslint-disable import/no-anonymous-default-export */
import store from 'store';
const USER_KEY = 'userInfo'; //定义一个常量;
export default {
    // 存储user
    saveUser(user) {
        store.set(USER_KEY, user)
    },
    // 获取user
    getUser() {
        return store.get(USER_KEY) || null // 这里容错应该设置称为null而不是{}空对象，因为如果是空对象，islogin会变成true继而引发页面可以直接跳转到admin
    },
    // 移除user
    removeUser() {
        store.remove(USER_KEY)
    }
}