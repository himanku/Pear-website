import {
  LOGIN_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  REGISTER_ERROR,
  REGISTER_START,
  REGISTER_SUCCESS,
} from "./actionTypes";

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
  btnDisabled: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
    case LOGIN_START:
    case LOGOUT_START:
      return { ...state, loading: true, btnDisabled: true };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        btnDisabled: false,
      };
    case LOGOUT_SUCCESS:
      return { ...state, currentUser: null };
    case REGISTER_ERROR:
    case LOGIN_ERROR:
    case LOGOUT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        btnDisabled: false,
      };
    default:
      return state;
  }
};
