import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import Seo from "../components/seo"
import HomeSummary from "../components/home-summary"
import Header from "../components/header"
import Footer from "../components/footer"
import Works from "../components/works"

const IndexPage = () => (
  <React.Fragment>
    <Header siteTitle="Drew" />
    <HomeSummary />
    <Works />
    {/* <Seo title="Home" /> */}
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
    <Footer />
  </React.Fragment>
)

export default IndexPage
