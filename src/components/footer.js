import { LinkedIn, Mail, Twitter } from "@mui/icons-material"
import { Grid, IconButton, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import React from "react"

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(10, 5),
  background: "#000000",
  marginBottom: 0,
  color: "#ffffff",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(10, 3),
  },
}))

const FooterDescText = styled(Typography)(({ theme }) => ({
  width: "40vw",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}))

function Footer() {
  return (
    <Root>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
        Contact Me
      </Typography>
      <FooterDescText color="primary" variant="body1">
        Have an idea you would like me to jump on? or just want to say hi!
        contact me to find out how I can help you. If it’s easier, you can email
        directly at &nbsp;
        <a href="mailto:andrewbamidele2@gmail.com" style={{ color: "inherit" }}>
          andrewbamidele2@gmail.com
        </a>
      </FooterDescText>
      <Grid
        container
        alignItems="center"
        alignContent="center"
        justifyContent="space-between"
        rowSpacing={4}
        sx={{
          mt: 4,
        }}
      >
        <Grid item>
          <IconButton
            color="primary"
            sx={{ p: 0, mr: 4 }}
            href="mailto:andrewbamidele2@gmail.com"
          >
            <Mail />
          </IconButton>
          <IconButton
            href="mailto:andrewbamidele2@gmail.com"
            color="primary"
            sx={{ p: 0, mr: 4 }}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            href="mailto:andrewbamidele2@gmail.com"
            color="primary"
            sx={{ p: 0 }}
          >
            <Twitter />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography
            sx={{
              textDecorationLine: "underline",
              fontSize: "4rem",
              fontWeight: 700,
              textTransform: "none",
              "&:hover": {
                cursor: "pointer",
                textDecorationLine: "underline",
              },
            }}
          >
            Let's Talk
          </Typography>
        </Grid>
      </Grid>
    </Root>
  )
}

export default Footer
