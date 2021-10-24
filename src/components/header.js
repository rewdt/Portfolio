import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import PropTypes from "prop-types"
import { useScrollTrigger, CssBaseline } from "@mui/material"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { styled } from "@mui/material/styles"

const NavLink = styled(AnchorLink)(({ theme, trigger }) => ({
  color: trigger ? theme.palette.primary.main : theme.palette.secondary.main,
  textDecorationLine: "none",
  fontFamily: "Poppins",
  fontWeight: 500,
  fontSize: 13,
  marginLeft: theme.spacing(3),
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
    color: trigger ? "secondary" : "primary",
  })
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
}

export default function Header({ siteTitle, ...props }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  })
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <div style={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
              <Button
                href="/"
                color={trigger ? "primary" : "secondary"}
                sx={{
                  fontWeight: 700,
                  textTransform: "none",
                }}
              >
                {siteTitle}
              </Button>
            </div>
            <NavLink trigger={trigger} to="/#projects" title="Projects">
              Projects
            </NavLink>
            <NavLink trigger={trigger} to="/#about" title="About">
              About
            </NavLink>
            <Button
              variant="outlined"
              href="/"
              color={trigger ? "primary" : "secondary"}
              sx={{
                textTransform: "none",
                fontWeight: 500,
                fontSize: 13,
                ml: 3,
              }}
            >
              Resume
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  )
}
