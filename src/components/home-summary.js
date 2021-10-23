import { Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import React from "react"
import Typed from "typed.js"

const useStyles = makeStyles(theme => ({
  root: {
    background: "#E8E8E2",
    height: "calc(100vh - 100px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    padding: theme.spacing(2, 5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2, 3),
    },
  },
  content: {
    width: "70vw",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  titleText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
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
        "A Fullstack developer",
        "I automate the web",
        "I implement pixel perfect UI's",
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
      <div className={classes.content}>
        <Typography variant="body2">Hi, my name is</Typography>
        <Typography
          variant="h2"
          className={classes.titleText}
          style={{ fontWeight: 700, color: "#000000" }}
        >
          Andrew Bamidele
        </Typography>
        <Typography
          variant="h2"
          className={classes.titleText}
          style={{
            fontWeight: 600,
            color: "#8892b0",
            background:
              "linear-gradient(to right, rgb(180, 0, 144) 0%, rgb(0, 44, 191) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          ref={el}
        />
        <Typography variant="body2">
          I am a fullstack software engineer with a passion for building,
          testing and scaling applications. My work cuts across various
          platforms such as android, ios and the web. By leveraging frameworks
          such as react, react native and nodejs I love startups and I am always
          excited to work on varying projects to ensure a sustainable growth
          within my locality and by extension the world at large
        </Typography>
      </div>
    </div>
  )
}

export default HomeSummary
