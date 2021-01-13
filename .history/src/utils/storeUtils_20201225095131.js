/* eslint-disable import/no-anonymous-default-export */
import store from 'store';
const USER_KEY = 'user_key'; //定义一个常量;
export default {
    // 存储user
    saveUser(user) { 
        store.set(USER_KEY,user)
    },
    // 获取user
    getUser() {
        return store.get(USER_KEY) || {}
    },
    // 移除user
    removeUser() { 
        store.remove(USER_KEY)
    }
}
