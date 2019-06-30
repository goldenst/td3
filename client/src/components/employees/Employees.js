import React, { Fragment, useContext, useEffect } from "react";
import EmployeeItem from './EmployeeItem';
import EmployeeContext from "../../context/employee/EmployeeContext";

const Employees = () => {
  const employeeContext = useContext(EmployeeContext);

  const { employees, filtered } = employeeContext;
  console.log('emp',employees);
  
  return(
    <div>
    {employees.map(employee => (
      <EmployeeItem key={employee.id} employee={employee} />
    ))}
      </div>
   
  )
 
};

export default Employees;
