import React from "react"
import { Link } from "gatsby"

import "../sass/footer.scss";

const Footer = () => (
  <footer id="footer">
    <div className="container">
      <hr />
      <ul>
        <li>
          <Link to="/">LinkedIn</Link>
        </li>
        <li>
          <Link to="/">GitHub</Link>
        </li>
        <li>
          <Link to="/">Say Hi!</Link>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
