import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const NavbarAdmin = ({ title, icon }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/calls">Calls</Link>
        </li>
        <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/reqby">Req By</Link>
      </li>
        <li>
          <Link to="/employee">Employees</Link>
        </li>
        <li>
          <Link to="/customers">Customers</Link>
        </li>
      </ul>
    </div>
  );
};

NavbarAdmin.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

NavbarAdmin.defaultProps = {
  title: "Tow Ducktivity     - Admin Navbar",
  icon: "fas fa-truck-monster"
};
export default NavbarAdmin;
