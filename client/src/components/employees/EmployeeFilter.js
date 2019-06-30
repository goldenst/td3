import React, { useContext, useRef, useEffect } from 'react';
import EmployeeContext from '../../context/employee/EmployeeContext';

const EmployeeFilter = () => {
  const employeeContext = useContext(EmployeeContext);
  const text = useRef('');

  const { filterEmployees, clearFilter, filtered } = employeeContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterEmployees(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Employees...'
        onChange={onChange}
      />
    </form>
  );
};

export default EmployeeFilter;
