import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {},

  /* -------------------- Typography -------------------- */
  typography: {
    fontFamily: [
      "Montserrat",
      "Quicksand",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),

    h1: {
      fontFamily: "Montserrat",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: 1.2,
    },
    h2: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: 1.2,
    },
    h3: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      letterSpacing: 1,
    },
    h4: {
      fontFamily: "Montserrat",
      fontWeight: 500,
      letterSpacing: 0.8,
    },
    h5: {
      fontFamily: "Quicksand",
      fontWeight: 500,
      letterSpacing: 0.5,
    },
    h6: {
      fontFamily: "Quicksand",
      fontWeight: 500,
      letterSpacing: 0.5,
    },

    body1: {
      fontFamily: "Quicksand",
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: "Quicksand",
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },

    button: {
      fontFamily: "Montserrat",
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 10,
  },

  spacing: 8,

  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "medium",
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
