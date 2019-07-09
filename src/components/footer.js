import React from "react";

import "../sass/footer.scss";

const Footer = () => (
  <footer id="footer">
    <div className="container">
      <hr />
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/dimarudeshko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rudeshko"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
