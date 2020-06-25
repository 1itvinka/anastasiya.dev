import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import makeStyles from "@material-ui/core/styles/makeStyles"
import grey from "@material-ui/core/colors/grey"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  post: {
    position: "relative",
    cursor: "pointer",
    height: "100%",
    display: "block",
    borderBottom: "none",
  },
  info: {
    position: "absolute",
    color: "white",
    background: "rgba(0, 0, 0, 0.5)",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: theme.spacing(5),

    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2),
    },
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    letterSpacing: ".175rem",
    lineHeight: "1.25",

    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  subtitle: {
    fontSize: "0.9rem",
    color: grey[300],
    marginBottom: theme.spacing(1),
  },
}))

const PostPreview = ({ slug, img, title, updatedOnDate }) => {
  const classes = useStyles()

  const defaultImg = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "default-img.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 910) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  img = img || defaultImg.img

  return (
    <Link href={slug} className={classes.post}>
      <Img fluid={img.childImageSharp.fluid} />
      <div className={classes.info}>
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Updated on {updatedOnDate}
        </Typography>
      </div>
    </Link>
  )
}

PostPreview.propTypes = {
  slug: PropTypes.string.isRequired,
  img: PropTypes.object,
  title: PropTypes.string.isRequired,
  updatedOnDate: PropTypes.string.isRequired,
}

export default PostPreview
