import React from "react";
import EmployeeItem from './EmployeeItem';


const Employees = () => {
  

 const employees = ''
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
