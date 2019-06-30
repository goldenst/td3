import React, { useContext } from "react";
import PropTypes from "prop-types";
import EmployeeContext from "../../context/employee/EmployeeContext";

const EmployeeItem = ({ employee }) => {
  const employeeContext = useContext(EmployeeContext);
  const { deleteContext, setCurrent, clearCurrent } = employeeContext;

  const { id, first_name, last_name, type, cell_number } = employee;


  
  return (
    <div className="card bg-light">
      <h5 className="text-primary text-left">
        {first_name} {last_name}{" "}
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
        <button className="btn btn-dark btn-sm" onClick={() => setCurrent(employee)}>Edit</button>
        <button className="btn btn-danger btn-sm ">Profile</button>
      </p>
    </div>
  );
};

EmployeeItem.propTypes = {
  employee: PropTypes.object.isRequired
};

export default EmployeeItem;
