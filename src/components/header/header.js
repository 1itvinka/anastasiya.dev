import React from "react"
import PropTypes from "prop-types"
import makeStyles from "@material-ui/core/styles/makeStyles"
import useTheme from "@material-ui/core/styles/useTheme"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"

import SocialLinks from "../social-links/social-links"
import Navigation from "./navigation"

const useStyles = makeStyles(theme => ({
  appBar: {
    background: theme.colors.background,
    boxShadow: "none",
  },
  toolbar: {
    justifyContent: "space-between",
    padding: "0",

    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  titleLink: {
    color: "inherit",
    fontSize: "1.6rem",
    letterSpacing: ".1rem",
    fontFamily: "'Ubuntu Mono', monospace",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    borderBottom: "none",

    [theme.breakpoints.down("xs")]: {
      display: "none",
    },

    "&:hover": {
      color: "inherit",
    },
  },
}))

const Header = ({ pageId }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container>
        <Toolbar className={classes.toolbar}>
          <Link href="/" className={classes.titleLink} underline="none">
            &lt;Anastasiya &#47;&gt;
          </Link>
          <Navigation pageId={pageId} />
          {isLargeScreen && <SocialLinks />}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

Header.propTypes = {
  pageId: PropTypes.number,
}

export default Header
