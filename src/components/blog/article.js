import React from "react"
import PropTypes from "prop-types"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography"
import grey from "@material-ui/core/colors/grey"
import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(7.5, 0, 5),
  },
  header: {
    marginBottom: theme.spacing(4),
  },
  img: {
    marginBottom: theme.spacing(4),
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
  },
  date: {
    fontSize: "0.9rem",
    color: grey[700],
  },
  text: {
    fontSize: "1.2rem",
    lineHeight: "1.65",
    textAlign: "justify",

    // custom styles for code snippets
    "& pre[class*='language-']": {
      fontSize: "1rem",
      background: theme.colors.background,
    },

    "& .token.atrule, .token.attr-value, .token.function, .token.class-name": {
      color: theme.colors.active,
    },

    "& li": {
      marginBottom: theme.spacing(2),
    },
  },
}))

const Article = ({ post }) => {
  const classes = useStyles()
  const img = post.frontmatter.image

  return (
    <article className={classes.root}>
      <header className={classes.header}>
        <Typography variant="h1" className={classes.title}>
          {post.frontmatter.title}
        </Typography>
        <p className={classes.date}>
          Updated on {post.frontmatter.updatedOnDate}
        </p>
      </header>
      {img && (
        <Img
          className={classes.img}
          fluid={post.frontmatter.image.childImageSharp.fluid}
        />
      )}
      <section
        dangerouslySetInnerHTML={{ __html: post.html }}
        className={classes.text}
      />
    </article>
  )
}

Article.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Article
