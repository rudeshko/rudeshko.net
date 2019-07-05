import React from "react";

import "../sass/header.scss";

const Header = () => (
  <header id="header">
    <div className="container">
      <div className="profile_picture"></div>
      <div className="profile_name">
        Dima Rudeshko
        <div className="subheading">
          Full Stack Software Developer in Toronto, Canada
        </div>
      </div>
    </div>
  </header>
);

export default Header;
