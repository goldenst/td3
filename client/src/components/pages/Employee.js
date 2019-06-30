import React from 'react'
import Employees from '../employees/Employees'
import EmployeeForm from '../employees/EmployeeForm';

const Employee = () => {
  return (
    <div className='grid-2'>
      <div>
        <EmployeeForm />
      </div>
      <div>
        <Employees />
      </div>
      
    </div>
  )
}

export default Employee
