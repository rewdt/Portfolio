import { Grid, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Typed from "typed.js"

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.main,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(2, 4),
    [theme.breakpoints.down("md")]: {
      height: "auto",
      padding: theme.spacing(2, 0),
    },
  },
  titleText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
  gradientText: {
    fontWeight: 600,
    color: "#8892b0",
    background: "linear-gradient(to right, #f12711 0%, #f5af19 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  grid1: {
    background: "#023047",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(0, 5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(5, 2),
    },
  },
  grid2: {
    background: "#8ecae6",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    height: "100%",
    padding: theme.spacing(0, 2),
  },
}))

function HomeSummary() {
  const classes = useStyles()
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null)

  React.useEffect(() => {
    const options = {
      strings: [
        "A software engineer",
        "A fullstack developer",
        "I automate the web",
        "I build mobile applications",
        "I implement pixel perfect UIs",
      ],
      loop: true,
      showCursor: false,
      typeSpeed: 50,
      backSpeed: 50,
    }

    typed.current = new Typed(el.current, options)

    return () => {
      typed.current.destroy()
    }
  }, [])
  return (
    <div className={classes.root}>
      <Grid
        container
        rowSpacing={5}
        sx={{
          height: "100%",
        }}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} className={classes.grid1}>
          <Typography variant="caption">Hi, my name is</Typography>
          <Typography
            variant="h2"
            className={classes.titleText}
            style={{ fontWeight: 700 }}
          >
            Oluwatobi Bamidele
          </Typography>
          <Typography variant="h4" className={classes.gradientText} ref={el} />
          <Typography variant="body1">
            I am a fullstack software engineer with a passion for building,
            testing and scaling applications. My work cuts across various
            platforms such as android, ios and the web. By leveraging frameworks
            such as react, react native and nodejs
            {/* I love startups and I am always
          excited to work on varying projects to ensure a sustainable growth
          within my locality and by extension the world at large */}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} className={classes.grid2}>
          <StaticImage
            src="../images/andrew-portfolio-img.png"
            quality={95}
            // formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{
              height: "100%",
            }}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default HomeSummary
