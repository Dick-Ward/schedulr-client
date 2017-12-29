import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navbar = props => {
  const loggedIn = !!props.currentUser.id;
  const handleNavToggle = () => {
    if (loggedIn) {
      return (
        <div className="item">
          <Link to="/login" onClick={props.handleLogout} className="ui item">
            Log Out
          </Link>
        </div>
      );
    } else {
      return (
        <div className="item">
          <Link to="/signup" className="ui item">
            Sign Up
          </Link>
          <Link to="/login" className="ui item">
            Sign In
          </Link>
        </div>
      );
    }
  };
  return (
    <div
      style={{
        backgroundColor: "rgba(244,250,255,.7)",
        height: "40px",
        marginBottom: "20px"
      }}
      className="ui secondary  menu"
    >
      <div className="right menu">{handleNavToggle()}</div>
    </div>
  );
};

export default Navbar;
