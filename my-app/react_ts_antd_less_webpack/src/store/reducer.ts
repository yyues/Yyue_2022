// 个人认为这相当于vuex的state
// 对于目前看来好像也能处理
import { PULSOUNT, MINXCOUNT } from './type'
import { combineReducers } from 'redux'
const defaultValue = {
  count: 0
}
function counterReducer(state = defaultValue, action: { type: any; data: number }) {
  switch (action.type) {
    case PULSOUNT:
      return { count: action.data }
    case MINXCOUNT:
      return { count: action.data }
    default:
      return state
  }
}
export const FINALREDUCER = combineReducers({
  counterReducer
})
