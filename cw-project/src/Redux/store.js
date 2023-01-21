import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AdminReducer } from "../Redux/Admin/reducer";
import { reducer as AuthReducer} from '../Redux/Authentication/reducer'

const rootReducer = combineReducers({
    admin: AdminReducer,
    auth: AuthReducer,
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
