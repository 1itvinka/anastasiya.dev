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

    "& h3": {
      paddingTop: theme.spacing(4),
    },

    "& h4": {
      paddingTop: theme.spacing(3),
    },

    "& h3 + h4": {
      paddingTop: 0,
    },

    // custom styles for code snippets
    "& pre[class*='language-']": {
      fontSize: "1rem",
      background: theme.colors.background,
    },

    "& p > code": {
      fontSize: "1rem",
      background: grey[300],
      color: "rgba(0, 0, 0, 0.87)",
      textShadow: "none",
      padding: "2px 4px",
      fontWeight: "400",
    },

    "& .token.atrule, .token.attr-value, .token.function, .token.class-name": {
      color: theme.colors.active,
    },

    "& li": {
      marginBottom: theme.spacing(2),

      "&:last-child": {
        marginBottom: 0,
      },
    },

    "& .book": {
      "& img": {
        width: "180px",
        paddingBottom: theme.spacing(1),
        float: "left",
        paddingRight: theme.spacing(3),
      },

      "&::after": {
        content: "''",
        clear: "both",
        display: "table",
      },

      "& h4": {
        padding: 0,
      },

      "& ul": {
        overflow: "hidden",
      },
    },

    "& .separator": {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      display: "flex",
      justifyContent: "center",

      "& em": {
        width: "3px",
        height: "3px",
        backgroundColor: "rgb(8, 8, 8)",
        borderRadius: "50%",
        marginRight: theme.spacing(3),
        display: "inline-block",

        "&:last-child": {
          marginRight: "0",
        },
      },
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
      {img && <Img className={classes.img} fluid={img.childImageSharp.fluid} />}
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
