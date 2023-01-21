import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AdminReducerIpad } from "../Redux/AdminIpad/reducer";
import { reducer as AdminReducerMac} from "../Redux/AdminMac/reducer";
import { reducer as AuthReducer} from '../Redux/Authentication/reducer';

const rootReducer = combineReducers({
    AdminReducerIpad, 
    AdminReducerMac,
    auth: AuthReducer,
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));