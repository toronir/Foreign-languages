import {combineReducers, createStore} from "redux";
import aboutUsReducer from "./aboutUs-reducer";
import languageReducer from "./language-reducer";

let reducers = combineReducers({
        aboutUsPage: aboutUsReducer,
        languagePage: languageReducer,

    }
)


let store = createStore(reducers);

export default store;