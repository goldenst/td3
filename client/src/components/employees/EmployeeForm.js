import React, { useState, useContext } from "react";
import EmployeeContext from "../../context/employee/EmployeeContext";

const EmployeeForm = () => {
  const employeeContext = useContext(EmployeeContext);

  const [employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    state: "",
    zip: "",
    cell_number: "",
    drivers_licence: "",
    licence_exp: "",
    emergency_contact: "",
    emergency_contact_number: "",
    emergency_relation: "",
    tsac: "",
    tims: "",
    rspt: "",
    bat101: "",
    bat_hybird: "",
    hire_date: "",
    is_active: true,
    leave_date: "",
    is_admin: "false"
  });

  const {
    first_name,
    last_name,
    email,
    address,
    city,
    state,
    zip,
    cell_number,
    drivers_licence,
    licence_exp,
    emergency_contact,
    emergency_contact_number,
    emergency_relation,
    tsac,
    tims,
    rspt,
    bat101,
    bat_hybird,
    hire_date,
    is_active,
    leave_date,
    is_admin
  } = employee;

  const onChange = e =>
    setEmployee({ ...employee, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    employeeContext.addEmployee(employee);
    setEmployee({
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      state: "",
      zip: "",
      cell_number: "",
      drivers_licence: "",
      licence_exp: "",
      emergency_contact: "",
      emergency_contact_number: "",
      emergency_relation: "",
      tsac: "",
      tims: "",
      rspt: "",
      bat101: "",
      bat_hybird: "",
      hire_date: "",
      is_active: "true",
      leave_date: "",
      is_admin: "false"
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Employee</h2>
      <input
        type="text"
        placeholder="First Name"
        name="first_name"
        value={first_name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="last_name"
        value={last_name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Cell phone Number"
        name="cell_number"
        value={cell_number}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Address"
        name="address"
        value={address}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="City"
        name="city"
        value={city}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="State"
        name="state"
        value={state}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Zip Code"
        name="zip"
        value={zip}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Drivers Licence"
        name="drivers_licence"
        value={drivers_licence}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Licence Exp"
        name="licence_exp"
        value={licence_exp}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Emergency Contact"
        name="emergency_contact"
        value={emergency_contact}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Emergency Number"
        name="emergency_contact_number"
        value={emergency_contact_number}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Relationship"
        name="emergency_relation"
        value={emergency_relation}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Drivers Licence"
        name="drivers_licence"
        value={drivers_licence}
        onChange={onChange}
      />
      <lable>TSAC Renew Date</lable>
      <input type="date" name="tsac" value={tsac} onChange={onChange} />
      <lable>Tim's Date</lable>
      <input type="date" name="tims" value={tims} onChange={onChange} />
      <lable>AAA RSPT Date</lable>
      <input type="date" name="rspt" value={rspt} onChange={onChange} />
      <lable>Battery 101 Date</lable>
      <input type="date" name="bat101" value={bat101} onChange={onChange} />
      <lable>Battery Hybird Date</lable>
      <input
        type="date"
        name="bat_hybird"
        value={bat_hybird}
        onChange={onChange}
      />
      <lable>Hire Date</lable>
      <input
        type="date"
        name="hire_date"
        value={hire_date}
        onChange={onChange}
      />
      <lable>Leave Date</lable>
      <input
        type="date"
        name="leave_date"
        value={leave_date}
        onChange={onChange}
      />
      <h5>Active Employee</h5>
      <input
        type="radio"
        name="is_active"
        value="false"
        checked={is_active === "false"}
        onChange={onChange}
      />{" "}
      False{" "}
      <input
        type="radio"
        name="is_active"
        value="true"
        checked={is_active === "true"}
        onChange={onChange}
      />{" "}
      True <h5>Admin</h5>
      <input
        type="radio"
        name="is_admin"
        value="false"
        checked={is_admin === "false"}
        onChange={onChange}
      />{" "}
      False{" "}
      <input
        type="radio"
        name="is_admin"
        value="true"
        checked={is_admin === "true"}
        onChange={onChange}
      />{" "}
      True{" "}
      <div>
        <input
          type="submit"
          valur="Add Employee"
          className="btn brn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default EmployeeForm;
