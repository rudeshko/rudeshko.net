import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Terminal from "../components/terminal"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Terminal />
  </Layout>
)

export default IndexPage
