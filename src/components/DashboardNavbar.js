import React from "react";
import { Link } from "react-router-dom";

const DashboardNavbar = (props) => {
  return (
    <nav className="dashboard-nav-container">
      <ul className="dashboard-nav-elements-container">
        <li className="dashboard-nav-element">Logo</li>
        <div className="dashboard-nav-element">
          <li className="dashboard-nav-element">
            <Link to="/explore">Explore</Link>
          </li>
          <li className="dashboard-nav-element">
            <Link to="/backpack">Backpack</Link>
          </li>
          <li className="dashboard-nav-element">
            <Link to="/settings">Settings</Link>
          </li>
        </div>
        <li className="dashboard-nav-element">
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNavbar;
