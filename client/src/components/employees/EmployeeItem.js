import React from "react";
import PropTypes from 'prop-types'


const EmployeeItem = ({ employee }) => {
  const { id, first_name, last_name, type, cell_number } = employee;

  return (
    <div className="card bg-light">
      <h5 className="text-primary text-left">
        {first_name}{' '}{last_name}{" "}
        <span
          className={
            "badge" + (type === "true" ? "badge-success" : "badge-primary")
          }
        >
          {type}
          
        </span>
        
      </h5>
      {cell_number}
      <p>
      <button className='btn btn-dark btn-sm '>Edit</button>
      <button className='btn btn-danger btn-sm '>Profile</button>
      </p>
    </div>
  );
};

EmployeeItem.propTypes = {
  employee: PropTypes.object.isRequired,
}

export default EmployeeItem;
