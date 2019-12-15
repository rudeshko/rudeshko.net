import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Terminal from "../components/Terminal";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Terminal />
  </Layout>
);

export default IndexPage;
