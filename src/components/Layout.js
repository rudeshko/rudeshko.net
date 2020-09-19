/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

import "../sass/Layout.scss";

const Layout = ({ className, children }) => (
  <div className="wrapper">
    <Header />
    <main
      className={["container", className ? className : ""].join(" ")}
    >
      {children}
    </main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
