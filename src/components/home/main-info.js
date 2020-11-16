import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import grey from "@material-ui/core/colors/grey"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Fade from "react-reveal/Fade"
import Tada from "react-reveal/Tada"

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.colors.background,
    color: "white",
  },
  container: {
    display: "flex",
  },
  info: {
    padding: theme.spacing(15, 0),
  },
  about: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "700px",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "justify",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  title: {
    fontSize: "2.75rem",
    lineHeight: "1.363",
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
    letterSpacing: "0.2rem",
  },
  hiImg: {
    display: "inline-block",
    marginLeft: "1rem",
  },
  text: {
    fontSize: "1.65rem",
    lineHeight: "1.5",
    color: grey[300],
    marginBottom: theme.spacing(2),
  },
  imgWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.up("md")]: {
      marginTop: "-0.85rem",
    },
  },
  img: {
    width: "300px",
    height: "300px",
    borderRadius: "50%",
  },
}))

export default function MainInfo() {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query {
      ava: file(relativePath: { eq: "ava.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 360) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={2} className={classes.info}>
          <Grid item xs={12} md={7} className={classes.about}>
            <Fade bottom>
              <Typography variant="h1" className={classes.title}>
                Hi there!
                <Tada delay={1200}>
                  <div role="img" aria-label="hi" className={classes.hiImg}>
                    👋
                  </div>
                </Tada>
              </Typography>
            </Fade>

            <Fade bottom delay={300}>
              <Typography variant="body1" className={classes.text}>
                My name is Anastasiya. I'm a frontend developer who is crazy
                about creating beautiful and performant web apps.
              </Typography>
            </Fade>

            <Fade bottom delay={600}>
              <Typography variant="body1" className={classes.text}>
                Here I drop notes about things that I'm interested in: frontend
                development, code quality, books, learning, etc.
              </Typography>
            </Fade>
          </Grid>
          <Grid item xs={12} md={5} className={classes.imgWrapper}>
            <Img
              fluid={data.ava.childImageSharp.fluid}
              className={classes.img}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
