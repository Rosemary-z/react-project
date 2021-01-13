//专门用以处理用户登录等信息相关的reducer模块
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../action/actionTypes'
import locStore from '../utils/storeUtils'
let initState = {
    isLoading: false,
    isLogin: false,
    userInfo: null
}

export const user = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_START: //点击登录按钮后，会触发
            state.isLoading = true; //开启loading动画
            return {
                ...state
            }
            case LOGIN_SUCCESS: //异步登录成功后，会触发
                state.isLoading = false; //关闭loading动画
                state.isLogin = true; //修改登录状态
                state.userInfo = action.payload; //记录用户信息
                console.log('success', state);
                locStore.saveUser(action.payload) // 登录成功后，本地存储用户信息到localStorage中
                return {
                    ...state
                }
                case LOGIN_FAIL: //点击登录按钮后，会触发
                    state.isLoading = false; //关闭loading动画
                    state.isLogin = false; //修改登录状态
                    state.userInfo = null; //清空用户信息
                    return {
                        ...state
                    }
                    default:
                        return state
    }
}