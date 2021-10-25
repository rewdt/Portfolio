import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          brandName
          title
        }
      }
    }
  `)
  return site.siteMetadata
}

export default useSiteMetadata
