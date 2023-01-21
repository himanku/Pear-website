import axios from "axios"
import { ADMIN_ADD_TASK_FAILURE, ADMIN_ADD_TASK_REQUEST, ADMIN_ADD_TASK_SUCCESS, ADMIN_DELETE_TASK_FAILURE, ADMIN_DELETE_TASK_REQUEST, ADMIN_DELETE_TASK_SUCCESS, ADMIN_GET_TASKS_FAILURE, ADMIN_GET_TASKS_REQUEST, ADMIN_GET_TASKS_SUCCESS, ADMIN_SINGLE_TASK_FAILURE, ADMIN_SINGLE_TASK_REQUEST, ADMIN_SINGLE_TASK_SUCCESS, ADMIN_UPDATE_TASK_FAILURE, ADMIN_UPDATE_TASK_REQUEST, ADMIN_UPDATE_TASK_SUCCESS } from "./actionTypes"

//get tasks
export const getTasks = () => (dispatch) => {
    dispatch({type: ADMIN_GET_TASKS_REQUEST});
    return axios.get(`http://localhost:8080/mac`)
    .then((res) => {
        dispatch({type: ADMIN_GET_TASKS_SUCCESS, payload: res.data});
    })
    .catch((err) => {
        dispatch({type: ADMIN_GET_TASKS_FAILURE})
    })
}

//add task
export const addTask = (payload) => (dispatch) => {
    dispatch({type: ADMIN_ADD_TASK_REQUEST})
    return axios.post(`http://localhost:8080/mac`, payload)
    .then((res) => {
        dispatch({type: ADMIN_ADD_TASK_SUCCESS, payload: res.data});
    })
    .catch((err) => {
        dispatch({type: ADMIN_ADD_TASK_FAILURE})
    })
}

//update task
export const updateTask = (id, payload) => (dispatch) => {
    dispatch({type: ADMIN_UPDATE_TASK_REQUEST})
    return axios.put(`http://localhost:8080/mac/${id}`, payload)
    .then((res) => {
        dispatch({type: ADMIN_UPDATE_TASK_SUCCESS});
    })
    .catch((err) => {
        dispatch({type: ADMIN_UPDATE_TASK_FAILURE})
    })
}

//delete task
export const deleteTask = (id) => (dispatch) => {
    dispatch({type: ADMIN_DELETE_TASK_REQUEST})
    return axios.delete(`http://localhost:8080/mac/${id}`)
    .then((res) => {
        dispatch({type: ADMIN_DELETE_TASK_SUCCESS, payload: id});
    })
    .catch((err) => {
        dispatch({type: ADMIN_DELETE_TASK_FAILURE})
    })
}

//singleUser
export const getSinglePageData = (id) => (dispatch) => {
    dispatch({type: ADMIN_SINGLE_TASK_REQUEST})
    return axios.get(`http://localhost:8080/mac/${id}`)
    .then((res) => {
        dispatch({type: ADMIN_SINGLE_TASK_SUCCESS, payload: res.data});
        console.log(res.data)
    })
    .catch((err) => {
        dispatch({type: ADMIN_SINGLE_TASK_FAILURE})
        console.log(err)
    })
}
