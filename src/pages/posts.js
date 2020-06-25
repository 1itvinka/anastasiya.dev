import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Posts from "../components/blog/posts"
import Description from "../components/description"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(7.5, 0, 0),
    textAlign: "center",
  },
  title: {
    fontSize: "1.6rem",
    textTransform: "uppercase",
    fontWeight: "600",
    marginBottom: theme.spacing(5),
    letterSpacing: ".175rem",
  },
}))

export default function PostsPage() {
  const classes = useStyles()

  return (
    <Layout pageId={1}>
      <SEO title="Posts" />
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Typography variant="h2" className={classes.title}>
            Not a Blog
          </Typography>
          <Description />
          <Posts />
        </Container>
      </div>
    </Layout>
  )
}
