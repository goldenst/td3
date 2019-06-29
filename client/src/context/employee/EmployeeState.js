import React, { useReducer } from "react";
//import iiud from "iiud";
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
        name: "jeff"
      },
      {
        name: "Dave"
      },
      {
        name: "Sam"
      }
    ]
  };

  const [state, dispatch] = useReducer(EmployeeReducer, initalState);
  // Create Actions Here
  // Add Employee

  // Delete Employee

  // Set Current Employee

  // Clear Current Employee

  // Update Employee

  // Filter Empoyee

  // Clear Filter

  return (
    <EmployeeContext.Provider
      value={{
        employees: state.employees
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeState;
