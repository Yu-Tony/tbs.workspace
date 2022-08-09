import { deepmerge } from "@mui/utils";
import { createTheme } from "@mui/material/styles";

var theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      dark: "#D3D3D3",
    },
    secondary: {
      main: "#9b7b7b",      
      secondary: "#ddc1af",
    },
    background: {
      main: "#000000",
      dark: "#000000",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#D3D3D3",
      tertiary: "#FA8466",
    },
  },
  typography: {
    fontFamily: "Outfit",
    color: "#644838"


  },
  components: {
    MuiChip: {
      variants: [
        {
          props: { variant: "categoria" },
          style: {
            borderRadius: "10px",
            backgroundColor: "#644838",
            padding: "4px 8px 4px 8px",
            fontWeight: 500,
            fontSize: "1.15rem",
            height: "inherit",
            ":hover": {
              backgroundColor: "#DE6D71",
            },
          },
        },
      ],
    },
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  }
});

//Fuentes responsivas
theme = deepmerge(theme, {
  typography: {
    h6: {
      [theme.breakpoints.up("md")]: {
        fontSize: "1.25rem",
      },
    },
  },
});
export default theme;
