import React from "react"

import Layout from "../components/layout"
import Landing from "../components/landing"
import SEO from "../components/seo"

export default function IndexPage ( ) {
  return (
  <Layout>
    <SEO title="Home" />
    <Landing />
  </Layout>
)
}
// export default IndexPage