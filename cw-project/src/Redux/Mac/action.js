import axios from "axios";
import { GET_TASKS_FAILURE, GET_TASKS_REQUEST, GET_TASKS_SUCCESS } from "./actionTypes";

export const getMacTasks =(dispatch) => {
    dispatch({type: GET_TASKS_REQUEST});
    return axios.get(`http://localhost:8080/mac`)
    .then((res) => {
        dispatch({type: GET_TASKS_SUCCESS, payload: res.data});
    })
    .catch((err) => {
        dispatch({type: GET_TASKS_FAILURE})
    })
}