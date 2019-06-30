import React, { Fragment, useContext, useEffect } from "react";
import ContactItem from './EmployeeItem';
import EmployeeContext from "../../context/employee/EmployeeContext";

const Employees = () => {
  const employeeContext = useContext(EmployeeContext);

  const { employees } = employeeContext;
  console.log('emp',employees);
  
  return(
    <div>
    {employees.map(employee => (
      <ContactItem key={employee.id} employee={employee} />
    ))}
      </div>
   
  )
 
};

export default Employees;
