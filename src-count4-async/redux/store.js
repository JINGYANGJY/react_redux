import {counter} from './reducers'
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'


//generate a store object
const store = createStore(counter, //应用上异步中间件
    composeWithDevTools(applyMiddleware(thunk))) //内部会第一次调用reducer得到初始state = 0

export default store