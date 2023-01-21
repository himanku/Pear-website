import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AdminReducerIpad } from "../Redux/AdminIpad/reducer";
import { reducer as AdminReducerMac} from "../Redux/AdminMac/reducer";
import { reducer as AuthReducer} from '../Redux/Authentication/reducer';
import {reducer as MacReducer } from "../Redux/Mac/reducer"

const rootReducer = combineReducers({
    AdminReducerIpad, 
    AdminReducerMac,
    auth: AuthReducer,
    MacReducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
