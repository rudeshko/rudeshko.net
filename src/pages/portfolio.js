import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const IndexPage = () => (
  <Layout className="portfolio">
    <SEO title="Portfolio" />
    <h1 className="title">
      Portfolio
      <div className="subheading">
        Some of the projects from my career, as well as my hobbies
      </div>
    </h1>
    <div className="content">Work in progress</div>
  </Layout>
);

export default IndexPage;
