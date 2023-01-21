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
import { useNavigate } from "react-router-dom";
import {
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

const registerStart = () => {
  return { type: REGISTER_START };
};

const registerSuccess = (payload) => {
  return { type: REGISTER_SUCCESS, payload };
};

const registerFailure = (payload) => {
  return { type: REGISTER_ERROR, payload };
};

const loginStart = () => {
  return { type: LOGIN_START };
};

const loginSuccess = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};

const loginFailure = (payload) => {
  return { type: LOGIN_ERROR, payload };
};

const userLogoutLoading = () => {
  return { type: LOGOUT_START };
};

const userLogoutSuccess = () => {
  return { type: LOGOUT_SUCCESS };
};

const userLogoutError = (payload) => {
  return { type: LOGOUT_ERROR, payload };
};

export const registerInitiate =
  (email, password, displayName) => (dispatch) => {
    dispatch(registerStart());
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName,
        });
        // console.log(user);
        dispatch(registerSuccess(user));
      })
      .catch((err) => {
        dispatch(registerFailure(err.message));
      });
  };

export const loginInitiate = (email, password) => (dispatch) => {
  dispatch(loginStart());
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      // console.log(user);
      dispatch(loginSuccess(res.user));
    })
    .catch((err) => {
      dispatch(loginFailure(err.message));
    });
};

export const logOutInitiate = (dispatch) => {
  dispatch(userLogoutLoading());
  signOut(auth)
    .then((res) => dispatch(userLogoutSuccess()))
    .catch((err) => dispatch(userLogoutError(err.message)));
};
