import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(244,250,255,.7)",
        height: "40px",
        marginBottom: "20px"
      }}
      class="ui secondary  menu"
    >
      <div class="right menu">
        <div class="item">
          <a class="ui item">Sign Up</a>
          <a class="ui item">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
