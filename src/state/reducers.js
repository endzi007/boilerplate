import { combineReducers } from "redux";
import personalInfoReducer from './personalInfoDuck.js/personalInfoDuck'
import uiReducer from './ui/uiDuck'
const reducers = combineReducers({
    personalInfo: personalInfoReducer,
    ui: uiReducer
})

export default reducers;