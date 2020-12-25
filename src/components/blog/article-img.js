import React from "react"
import PropTypes from "prop-types"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Img from "gatsby-image"
import grey from "@material-ui/core/colors/grey"
import Link from "@material-ui/core/Link"

const useStyles = makeStyles(theme => ({
  mainImg: {
    margin: 0,
    paddingBottom: theme.spacing(1),
  },

  caption: {
    marginTop: theme.spacing(1),
    fontSize: "0.85rem",
    color: grey[700],
    textAlign: "center",

    "& a": {
      color: grey[700],
    },
  },
}))

const ArticleImg = ({ post }) => {
  const classes = useStyles()
  const img = post.frontmatter.image
  const imageRef = post.frontmatter.imageRef

  return (
    <figure className={classes.mainImg}>
      {img && <Img className={classes.img} fluid={img.childImageSharp.fluid} />}

      {imageRef && (
        <figcaption className={classes.caption}>
          Photo by{" "}
          <a href={imageRef.authorLink} target="_blank">
            {imageRef.authorName}
          </a>{" "}
          from{" "}
          <Link href={imageRef.link} underline="none" target="_blank">
            {imageRef.platform}
          </Link>
        </figcaption>
      )}
    </figure>
  )
}

ArticleImg.propTypes = {
  post: PropTypes.object.isRequired,
}

export default ArticleImg
