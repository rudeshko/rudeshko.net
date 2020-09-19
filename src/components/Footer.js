import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import "../sass/Footer.scss";

// TODO: Add Resume
const Footer = () => (
  <footer id="footer">
    <div className="container">
      <hr />
      <ul>
        {/* <li>
          <a href="/portfolio" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSuitcase} />
            Portfolio
          </a>
        </li> */}
        <li>
          <a
            href="https://www.linkedin.com/in/dimarudeshko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rudeshko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>
        </li>
        {/* <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFilePdf} />
            Resume
          </a>
        </li> */}
      </ul>
      <div className="view_source">
        <a
          href="https://github.com/rudeshko/rudeshko.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faCode} />
          View Source on GitHub
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
