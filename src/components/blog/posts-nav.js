import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles(theme => ({
  nav: {
    padding: theme.spacing(0, 0, 7.5),
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    listStyle: "none",
    padding: "0px",
  },
  link: {
    fontSize: "1rem",
  },
}))

const PostsNav = ({ pageContext }) => {
  const classes = useStyles()
  const { previous, next } = pageContext

  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev" className={classes.link}>
              ← Previous Post
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next" className={classes.link}>
              Next Post →
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}

PostsNav.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default PostsNav
