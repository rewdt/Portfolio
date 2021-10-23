import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"

export default function Header({ siteTitle }) {
  return (
    <AppBar position="relative" elevation={0} style={{ background: "#E8E8E2" }}>
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
  )
}
