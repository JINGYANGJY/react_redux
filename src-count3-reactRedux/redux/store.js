import {counter} from './reducers'
import {createStore} from 'redux';


//generate a store object
const store = createStore(counter) //内部会第一次调用reducer得到初始state = 0

export default store