import { createTheme } from "@material-ui/core/styles"
import { yellow, indigo, red } from "@material-ui/core/colors"

export const cssVariables = {
  colors: {
    active: yellow[600],
    background: "#172742",
  },
}

export const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        a: {
          textDecoration: "none",
          color: indigo[600],
          borderBottom: "1px dashed",
          transitionDuration: ".3s",

          "&:hover": {
            borderBottom: "none",
            color: red[900],
          },
        },
      },
    },
    MuiButton: {
      outlinedSizeLarge: {
        borderColor: "#000",
        borderRadius: "0",
        fontSize: "1rem",
        fontWeight: "400",
        color: "#333",
        textTransform: "none",
        letterSpacing: ".1rem",

        "&:hover": {
          borderBottom: "1px solid",
          color: "inherit",
        },
      },
    },
  },
})
