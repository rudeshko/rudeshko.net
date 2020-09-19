import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Terminal from "../components/Terminal";
import { config } from "@fortawesome/fontawesome-svg-core";

import "../sass/index.scss";

config.autoAddCss = false;

const IndexPage = () => (
  <Layout className="main">
    <SEO title="Home" />
    <Terminal />
  </Layout>
);

export default IndexPage;
