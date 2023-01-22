import {ADMIN_ADD_TASK_FAILURE, ADMIN_ADD_TASK_REQUEST, ADMIN_ADD_TASK_SUCCESS, ADMIN_DELETE_TASK_FAILURE, ADMIN_DELETE_TASK_REQUEST, ADMIN_DELETE_TASK_SUCCESS, ADMIN_GET_TASKS_FAILURE, ADMIN_GET_TASKS_REQUEST, ADMIN_GET_TASKS_SUCCESS, ADMIN_UPDATE_TASK_FAILURE, ADMIN_UPDATE_TASK_REQUEST, ADMIN_UPDATE_TASK_SUCCESS} from "./actionTypes";
  
  const initialState = {
    tasks: [],
    isLoading: false,
    isError: false,
  };
  
  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ADMIN_GET_TASKS_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case ADMIN_GET_TASKS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          tasks: payload,
        };
      case ADMIN_GET_TASKS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case ADMIN_ADD_TASK_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case ADMIN_ADD_TASK_SUCCESS:
        return {
          ...state,
          isLoading: false,
          tasks: [...state.tasks, payload],
        };
      case ADMIN_ADD_TASK_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case ADMIN_UPDATE_TASK_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case ADMIN_UPDATE_TASK_SUCCESS:
        const newTask = state.tasks.map((item) => {
          return item.id === payload.id ? payload : item;
        });
        return {
          ...state,
          isLoading: false,
          tasks: newTask,
        };
      case ADMIN_UPDATE_TASK_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case ADMIN_DELETE_TASK_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case ADMIN_DELETE_TASK_SUCCESS:
        const filteredTasks = state.tasks.filter((item) => {
          return item.id !== payload;
        });
        return {
          ...state,
          isLoading: false,
          tasks: filteredTasks,
        };
      case ADMIN_DELETE_TASK_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        return state;
    }
  };
  
  export { reducer };
  