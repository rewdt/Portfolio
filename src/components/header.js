import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import PropTypes from "prop-types"
import { useScrollTrigger, CssBaseline } from "@mui/material"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { styled } from "@mui/styles"

const NavLink = styled(AnchorLink)(({ theme }) => ({
  color: theme.palette.secondary.main,
  textDecorationLine: "none",
  fontFamily: "Poppins",
  fontSize: 13,
  marginRight: 10,
  "&:hover": {
    textDecorationLine: "underline",
  },
}))

function HideOnScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
}

export default function Header({ siteTitle, ...props }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar position="fixed">
          <Toolbar>
            <div style={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
              <Button
                href="/"
                color="secondary"
                sx={{
                  fontWeight: 700,
                  textTransform: "none",
                }}
              >
                {siteTitle}
              </Button>
            </div>
            <NavLink to="/#projects" title="Projects">
              Projects
            </NavLink>
            <NavLink to="/#about" title="About">
              About
            </NavLink>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  )
}
