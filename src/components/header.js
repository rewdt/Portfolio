import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import PropTypes from "prop-types"
import { Slide, useScrollTrigger, CssBaseline } from "@mui/material"

function HideOnScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )

  // return React.cloneElement(slide, {
  //   elevation: trigger ? 4 : 0,
  // })
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default function Header({ siteTitle, ...props }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          // position="relative"
          elevation={0}
          style={{ background: "#E8E8E2" }}
        >
          <Toolbar>
            <div style={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
              <Button
                color="secondary"
                sx={{
                  fontWeight: 700,
                  textTransform: "none",
                }}
              >
                {siteTitle}
              </Button>
            </div>
            <Button color="secondary">Login</Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  )
}
