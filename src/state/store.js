import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { defaultState as personalInfo } from "./personalInfoDuck.js/personalInfoDuck";
import { defaultState as ui } from './ui/uiDuck';
import logger from "redux-logger";
let defaultState = {
    personalInfo,
    ui
}
const store = createStore(reducers, defaultState, applyMiddleware(logger));

export default store;