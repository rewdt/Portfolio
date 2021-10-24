import * as React from "react"
import Seo from "../components/seo"
import HomeSummary from "../components/home-summary"
import Projects from "../components/projects"
import About from "../components/about"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <HomeSummary />
    <About />
    <Projects />
    <Seo title="Home" />
  </Layout>
)

export default IndexPage
