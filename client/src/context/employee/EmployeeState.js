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
        id: '1',
        first_name: "Jeff",
        last_name: 'Welch',
        cell_number: '555-555-5555',
        type: ''
      },
      {
        id: '2',
        first_name: "Dave",
        type: ''
      },
      {
        id: '3',
        first_name: "Sam",
        type: ''
      }
    ]
  };

  const [state, dispatch] = useReducer(EmployeeReducer, initalState);
  // Create Actions Here
  // Add Employee
  const addEmployee = employee => {
    employee.id = uuid.v4();
    dispatch({type: ADD_EMPLOYEE, payload: employee})
  }

  // Delete Employee

  // Set Current Employee

  // Clear Current Employee

  // Update Employee

  // Filter Empoyee

  // Clear Filter

  return (
    <EmployeeContext.Provider
      value={{
        employees: state.employees, addEmployee
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeState;
