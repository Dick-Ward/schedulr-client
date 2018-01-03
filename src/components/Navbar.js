import React from "react";
import { Link } from "react-router-dom";
import { Menu, Item } from "semantic-ui-react";

const Navbar = props => {
  const loggedIn = !!props.currentUser.id;
  const handleNavToggle = () => {
    if (loggedIn) {
      return (
        <Item>
          <Link to="/login" onClick={props.handleLogout} className="ui item">
            Log Out
          </Link>
        </Item>
      );
    } else {
      return (
        <Menu.Item>
          <Menu.Item>
            <Link to="/signup" className="ui item">
              Sign Up
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/login" className="ui item">
              Sign In
            </Link>
          </Menu.Item>
        </Menu.Item>
      );
    }
  };
  return (
    <Menu
      secondary
      style={{
        backgroundColor: "rgba(244,250,255,.7)",
        height: "40px",
        marginBottom: "20px"
      }}
    >
      <Menu.Item style={{ fontStyle: "italic" }}>
        Welcome to Schedulr, the notecard inspired day planner
      </Menu.Item>
      <Menu.Menu position="right">{handleNavToggle()}</Menu.Menu>
    </Menu>
  );
};

export default Navbar;
