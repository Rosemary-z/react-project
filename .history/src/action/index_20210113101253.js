// 存放所有actionCreator
// 用以生成状态机所需action的
import {
    userLogin
} from '../api/userApi'
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './actionTypes'

export const loginStart = () => { //创造开启登录action的方法函数，同步action
    return {
        type: LOGIN_START
    }
}
export const loginSuccess = (payload) => { ///触发登录成功的action，同步action
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}
export const loginFail = () => { //创造开启登录失败的方法函数，同步action
    return {
        type: LOGIN_FAIL
    }
}

export const loginActSync = (data, props) => { //用以发起用户登录异步请求的action
    return (dispatch) => { // 将action自动dispatch的动作拦截到此处
        dispatch(loginStart()) //【1】手动dispatch，开启用户登录
        userLogin(data).then(res => { //发起用户登录请求
            console.log(res);
            if (res.status === 200) {
                dispatch(loginSuccess(res.data)) //【2】手动触发登录成功的dispatch
                // 此处可以触发路由的重新跳转  /
                props.history.replace('/')
            }
        }).catch(err => {
            console.log('用户名或密码错误');
            console.log(err);
            dispatch(loginFail()) //【3】手动触发登录失败的dispatch
        })

    }
}