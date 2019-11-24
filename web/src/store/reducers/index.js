import {combineReducers} from "redux"

import counter from './counter'
import login from "./login"
import requestOFTransfer from './requestOFTransfer'

export default combineReducers({
counter,login,requestOFTransfer
})
