import { createMuiTheme } from '@material-ui/core/styles';
import { grey, green, deepOrange, yellow, lightBlue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: green[200],
      main: green[500],
      dark: green[700],
      contrastText: '#fff'
    },
    secondary: {
      light: grey[100],
      main: grey[300],
      dark: grey[600],
      contrastText: '#fff'
    },
    error: {
      light: deepOrange[100],
      main: deepOrange[300],
      dark: deepOrange[600],
      contrastText: '#fff'
    },
    warning: {
      light: yellow[100],
      main: yellow[300],
      dark: yellow[600],
      contrastText: '#fff'
    },
    info: {
      light: lightBlue[100],
      main: lightBlue[300],
      dark: lightBlue[600],
      contrastText: '#fff'
    },
    success: {
      light: green[100],
      main: green[300],
      dark: green[600],
      contrastText: '#fff'
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar": {
          width: 10,
        },
        "*::-webkit-scrollbar-track": {
          backgroundColor: "#ddd",

        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: grey[400],
        },
      },
    },
  },
  typography: {
    fontFamily: ['Castoro', 'serif'].join(',')
  }
});

export default theme;
