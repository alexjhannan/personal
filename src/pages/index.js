import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`react`, `developer`, `brooklyn`]} />
    <h1>Hi</h1>
    <p>Keep it up.</p>
    <Link to="/animation-play/">Animation Play</Link>
  </Layout>
)

export default IndexPage
