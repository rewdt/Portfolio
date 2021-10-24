import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import React from "react"
import { Link } from "gatsby-theme-material-ui"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 0),
  },
  card: {
    display: "inline-block",
    width: 400,
    [theme.breakpoints.down("sm")]: {
      width: 200,
    },
  },
  cardMedia: {
    height: 300,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
  cardLink: {
    fontSize: 12,
    fontFamily: "Poppins",
    textDecorationLine: "none",
    "&:hover": {
      textDecorationLine: "underline",
    },
  },
  cardSection: { overflow: "auto", whiteSpace: "nowrap" },
}))

function Projects() {
  const classes = useStyles()
  return (
    <div className={classes.root} id="projects">
      <Typography
        variant="h5"
        sx={{
          ml: 3,
          mb: 3,
          fontWeight: 600,
        }}
      >
        Projects
      </Typography>
      <div className={classes.cardSection}>
        {[0, 1, 2, 4, 5].map((el, i) => (
          <Card
            key={el.toString()}
            color="secondary"
            elevation={0}
            className={classes.card}
            sx={{
              ml: i === 0 ? 3 : 0,
              mr: 3,
            }}
          >
            <CardMedia
              image="https://picsum.photos/400"
              component="img"
              className={classes.cardMedia}
              sx={{
                mb: 0,
              }}
            />
            <CardContent
              sx={{
                p: 0,
                m: 0,
                display: "block",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Project Title {i}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                }}
              >
                Fullstack Developer
              </Typography>
              <Typography
                variant="caption"
                component="p"
                sx={{
                  whiteSpace: "normal",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  display: "-webkit-box",
                  // fontSize: 13,
                }}
              >
                Cupidatat minim sit Lorem veniam. Pariatur eiusmod cupidatat
                aliquip nisi. Exercitation cupidatat quis consectetur sunt ea
                laboris pariatur veniam amet occaecat. Qui esse Lorem amet
                pariatur nostrud commodo est laboris culpa Lorem reprehenderit
                occaecat. Ad incididunt ea consequat eu duis aute.
              </Typography>
              <Link to="/blog" color="secondary" className={classes.cardLink}>
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Projects
