import React from "react"
import PropTypes from "prop-types"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Link from "@material-ui/core/Link"

const useStyles = makeStyles(theme => ({
  link: {
    color: "inherit",
    fontSize: "1rem",
    fontWeight: "bold",
    padding: theme.spacing(1, 3),
    borderBottom: "none",

    [theme.breakpoints.down("sm")]: {
      "&:last-child": {
        paddingRight: 0,
      },
    },

    "&:hover": {
      color: "inherit",

      "& span:after": {
        width: "100%",
      },
    },
  },
  activeLink: {
    color: theme.colors.active,

    "&:hover": {
      color: theme.colors.active,
    },

    "& span:after": {
      width: "100%",
    },
  },
  linkText: {
    position: "relative",

    "&:after": {
      content: "''",
      height: "2px",
      backgroundColor: "currentColor",
      position: "absolute",
      bottom: "-4px",
      left: "0",
      width: "0",
      transition: "width .1s ease-in-out",
    },
  },
}))

const Navigation = ({ pageId }) => {
  const classes = useStyles()

  const links = [
    {
      id: 0,
      name: "Home",
      href: "/",
    },
    {
      id: 1,
      name: "Posts",
      href: "/posts",
    },
  ]

  return (
    <div>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`${classes.link} ${
            pageId === link.id && classes.activeLink
          }`}
          underline="none"
          target={link.isTargetBlank ? "_blank" : "_self"}
        >
          <span className={classes.linkText}>{link.name}</span>
        </Link>
      ))}
    </div>
  )
}

Navigation.propTypes = {
  pageId: PropTypes.number,
}

export default Navigation
