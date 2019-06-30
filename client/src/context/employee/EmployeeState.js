import React, { useReducer } from "react";
import uuid from "uuid";
import EmployeeContext from "./EmployeeContext";
import EmployeeReducer from "./EmployeeReducer";
import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_EMPLOYEE,
  FILTER_EMPLOYEE,
  CLEAR_FILTER
} from "../types";

const EmployeeState = props => {
  const initalState = {
    employees: [
      {
        id: "1",
        first_name: "Jeff",
        last_name: "Welch",
        cell_number: "555-555-5555",
        type: ""
      },
      {
        id: "2",
        first_name: "Dave",
        type: ""
      },
      {
        id: "3",
        first_name: "Sam",
        type: ""
      }
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(EmployeeReducer, initalState);
  // Create Actions Here
  // Add Employee
  const addEmployee = employee => {
    employee.id = uuid.v4();
    dispatch({ type: ADD_EMPLOYEE, payload: employee });
  };

  // Delete Employee
  const deleteEmployee = id => {
    dispatch({ type: DELETE_EMPLOYEE, payload: id });
  };

  // Set Current Employee
  const setCurrent = employee => {
    dispatch({ type: SET_CURRENT, payload: employee });
  };
  // Clear Current Employee
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Update Employee
  const updateEmployee = employee => {
    dispatch({ type: UPDATE_EMPLOYEE, payload: employee });
  };
  // Filter Empoyee
  const filterEmployees = text => {
    dispatch({ type: FILTER_EMPLOYEE, payload: text });
  };
  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees: state.employees,
        current: state.current,
        filtered: state.filtered,
        addEmployee,
        deleteEmployee,
        setCurrent,
        clearCurrent,
        updateEmployee,
        filterEmployees,
        clearFilter
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeState;
