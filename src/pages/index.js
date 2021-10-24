import * as React from "react"
// import Seo from "../components/seo"
import HomeSummary from "../components/home-summary"
import Header from "../components/header"
import Footer from "../components/footer"
import Projects from "../components/Projects"
// import About from "../components/about"

const IndexPage = () => (
  <React.Fragment>
    <Header siteTitle="Drew" />
    <HomeSummary />
    {/* <About /> */}
    <Projects />
    {/* <Seo title="Home" /> */}
    <Footer />
  </React.Fragment>
)

export default IndexPage
