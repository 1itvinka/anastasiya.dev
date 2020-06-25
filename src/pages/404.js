import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(15, 0),
    textAlign: "center",
  },
  title: {
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

export default function NotFoundPage() {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Typography variant="h2" className={classes.title}>
            Oops. Sorry we can&#39;t find that page!
          </Typography>
          <Typography variant="body1" className={classes.text}>
            Either something went wrong or the page doesn&#39;t exist anymore.
          </Typography>
          <Button variant="outlined" size="large" href="/">
            Home Page
          </Button>
        </Container>
      </div>
    </Layout>
  )
}
