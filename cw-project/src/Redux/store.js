import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AdminReducer } from "../Redux/Admin/reducer";

// const rootReducer = combineReducers({
//     admin: AdminReducer,
// })
export const store = legacy_createStore(AdminReducer, applyMiddleware(thunk));
