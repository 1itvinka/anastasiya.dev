import React from "react"
import PropTypes from "prop-types"
import makeStyles from "@material-ui/core/styles/makeStyles"
import IconButton from "@material-ui/core/IconButton"
import Tooltip from "@material-ui/core/Tooltip"
import { links } from "./social-links-data"

const useStyles = makeStyles(theme => ({
  links: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    textAlign: "right",
  },
  button: {
    margin: theme.spacing(0, 1),
  },
}))

const SocialLinks = ({ color }) => {
  const classes = useStyles()

  return (
    <div className={classes.links}>
      {links.map((link, index) => {
        const IconTag = link.icon
        return (
          <IconButton
            className={classes.button}
            href={link.url}
            target="_blank"
            key={index}
          >
            <Tooltip title={link.title}>
              <IconTag style={{ color: color || "white" }}></IconTag>
            </Tooltip>
          </IconButton>
        )
      })}
    </div>
  )
}

SocialLinks.propTypes = {
  color: PropTypes.string,
}

export default SocialLinks
