import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_EMPLOYEE,
  FILTER_EMPLOYEE,
  CLEAR_FILTER
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
        loading: false
      };
    case UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map(employee =>
          employee.id === action.payload._id ? action.payload : employee
        )
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employee: state.employee.filter(
          employee => employee.id !== action.payload
        )
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case FILTER_EMPLOYEE:
      return {
        ...state,
        filtered: state.employees.filter(employee => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            employee.first_name.match(regex) || employee.email.match(regex)
          );
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    default:
      return state;
  }
};
