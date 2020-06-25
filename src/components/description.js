import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"

const useStyles = makeStyles(theme => ({
  text: {
    marginBottom: theme.spacing(7),
    fontSize: "1.3rem",
    lineHeight: "1.5",
  },
}))

export default function Description() {
  const classes = useStyles()

  return (
    <Typography variant="body1" className={classes.text}>
      It's not a traditional blog with a number of static posts. It's a space
      where I collect ideas, resources, snippets and just random bits and
      pieces. It's a Digital Garden that is evolving in real time.{" "}
      <Link href="/why-digital-garden/" underline="none">
        More about it.
      </Link>
    </Typography>
  )
}
