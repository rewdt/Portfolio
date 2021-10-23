import { Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import React from "react"

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(5),
  background: "#000000",
  marginBottom: 0,
  color: "#ffffff",
}))

function Footer() {
  return (
    <Root>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Contact Me
      </Typography>
      <Typography color="primary" variant="body2" style={{ width: "40vw" }}>
        Have an idea you would like me to jump on or just want to say hi!
        Contact me to find out how I can help you. If it’s easier, you can email
        directly at &nbsp;
        <a href="mailto:andrewbamidele2@gmail.com" style={{ color: "inherit" }}>
          andrewbamidele2@gmail.com
        </a>
      </Typography>
    </Root>
  )
}

export default Footer
