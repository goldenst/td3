import React, { Fragment, useContext, useEffect } from "react";
import EmployeeContext from "../../context/employee/EmployeeContext";

const Employee = () => {
  const employeeContext = useContext(EmployeeContext);

  const { employees } = employeeContext;
  console.log('emp',employees);
  
  return(
    <div>
    {employees.map(employee => (
      <h3>{employee.name}</h3>
    ))}
      </div>
   
  )
 
};

export default Employee;
