import { createTheme } from "@mui/material"

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#000000",
    },
    text: {
      primary: "#000000",
    },
  },
})

export default theme
