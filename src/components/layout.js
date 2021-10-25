/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"
import Footer from "./footer"
import useSiteMetadata from "../hooks/use-site-metadata"

const Layout = ({ children }) => {
  const { brandName } = useSiteMetadata()
  return (
    <>
      <Header siteTitle={brandName || `Title`} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
