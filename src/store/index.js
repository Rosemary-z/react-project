import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import reducers from '../reducer'
import thunk from 'redux-thunk' // 引入异步action操作的中间件
const store = createStore(
    combineReducers(reducers),
    applyMiddleware(thunk)
)
export default store;