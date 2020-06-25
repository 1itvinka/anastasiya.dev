import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Posts from "../blog/posts"
import Description from "../description"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(7.5, 0),
    textAlign: "center",
  },
  blockTitle: {
    fontSize: "1.6rem",
    textTransform: "uppercase",
    fontWeight: "600",
    marginBottom: theme.spacing(5),
    letterSpacing: ".175rem",
  },
  text: {
    marginBottom: theme.spacing(7),
    fontSize: "1.3rem",
    lineHeight: "1.5",
  },
}))

export default function RecentPosts() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.content}>
        <Typography variant="h2" className={classes.blockTitle}>
          Recent Posts
        </Typography>
        <Description />

        <Posts limit={2} />
        <Button variant="outlined" size="large" href="/posts">
          More Posts
        </Button>
      </Container>
    </div>
  )
}
