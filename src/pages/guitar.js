
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "@components/Layout"
import SEO from "@components/SEO"
import Guitar from "@components/Guitar"

const IndexPage = () => (
  <Layout>
    <SEO title="Guitar Tool" keywords={[`react`, `guitar`]} />
    <Guitar />
  </Layout>
)

export default IndexPage
