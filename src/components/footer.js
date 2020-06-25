import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import useTheme from "@material-ui/core/styles/useTheme"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import grey from "@material-ui/core/colors/grey"
import SocialLinks from "./social-links/social-links"

const useStyles = makeStyles(theme => ({
  root: {
    borderTop: `1px solid ${grey[300]}`,
    padding: theme.spacing(4),

    "& > div + p": {
      paddingTop: theme.spacing(4),
    },
  },
  info: {
    textAlign: "center",
    fontSize: "1rem",
  },
  name: {
    whiteSpace: "nowrap",
  },
}))

export default function Footer() {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <div className={classes.root}>
      {isSmallScreen && <SocialLinks color={grey[800]} />}
      <Typography className={classes.info} variant="body1">
        Created with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        and{" "}
        <span role="img" aria-label="coffee">
          ☕️
        </span>{" "}
        by <span className={classes.name}>Anastasiya Tyshkavets.</span>{" "}
        <Link
          href="https://github.com/1itvinka/anastasiya.dev"
          target="_blank"
          underline="none"
        >
          Source code
        </Link>
        .
      </Typography>
    </div>
  )
}
