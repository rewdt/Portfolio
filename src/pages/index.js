import * as React from "react"
// import Seo from "../components/seo"
import HomeSummary from "../components/home-summary"
import Header from "../components/header"
import Footer from "../components/footer"
import Projects from "../components/projects"
import About from "../components/about"

const IndexPage = () => (
  <div>
    <Header siteTitle="Drew" />
    <HomeSummary />
    <About />
    <Projects />
    {/* <Seo title="Home" /> */}
    <Footer />
  </div>
)

export default IndexPage
