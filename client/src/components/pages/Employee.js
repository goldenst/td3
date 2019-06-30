import React from 'react'
import Employees from '../employees/Employees'
import EmployeeForm from '../employees/EmployeeForm';
import EmployeeFilter from '../employees/EmployeeFilter';

const Employee = () => {
  return (
    <div className='grid-2'>
      <div>
        <EmployeeForm />
      </div>
      <div>
        <EmployeeFilter />
        <Employees />
      </div>
      
    </div>
  )
}

export default Employee
