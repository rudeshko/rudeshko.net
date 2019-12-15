import React from "react";

import "../sass/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";

const Header = () => (
  <header id="header">
    <div className="container">
      <div className="profile_picture"></div>
      <div className="profile_name">
        Dima Rudeshko
        <div className="subheading">
          Full Stack Software Developer in Toronto, Canada{" "}
          <FontAwesomeIcon icon={faCanadianMapleLeaf} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
