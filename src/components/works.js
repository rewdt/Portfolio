import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    // background: "#E8E8E2",
    padding: theme.spacing(5, 0),
    // [theme.breakpoints.down("md")]: {
    //   padding: theme.spacing(2, 3),
    // },
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
}))

function Works() {
  const classes = useStyles()
  return (
    <div className={classes.root} id="works">
      <Typography
        variant="h4"
        sx={{
          ml: 3,
          mb: 5,
        }}
      >
        Works
      </Typography>
      <div style={{ overflow: "auto", whiteSpace: "nowrap" }}>
        {[0, 1, 2, 4, 5].map((el, i) => (
          <Card
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
              <Typography variant="subtitle1">Project Title {i}</Typography>
              <Typography variant="subtitle1">Fullstack Developer</Typography>
              <Typography
                variant="caption"
                component="p"
                sx={{
                  whiteSpace: "normal",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  display: "-webkit-box",
                  fontSize: 13,
                }}
              >
                Cupidatat minim sit Lorem veniam. Pariatur eiusmod cupidatat
                aliquip nisi. Exercitation cupidatat quis consectetur sunt ea
                laboris pariatur veniam amet occaecat. Qui esse Lorem amet
                pariatur nostrud commodo est laboris culpa Lorem reprehenderit
                occaecat. Ad incididunt ea consequat eu duis aute.
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Works
