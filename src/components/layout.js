import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider, makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { grey } from "@material-ui/core/colors"
import { theme, cssVariables } from "./global-styles"

import Header from "./header/header"
import Footer from "./footer"

const useStyles = makeStyles(theme => ({
  wrapper: {
    minHeight: "100vh",
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    gridTemplateColumns: "100%",
    background: grey[200],
    minWidth: "320px",
  },
}))

const Layout = ({ children, pageId }) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={{ ...theme, ...cssVariables }}>
      <CssBaseline />
      <div className={classes.wrapper}>
        <Header pageId={pageId} />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageId: PropTypes.number,
}

export default Layout
