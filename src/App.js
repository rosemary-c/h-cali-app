import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Router from './components/Router';

const theme = createTheme({
  palette: {
    primary: {
      main: "#2886FC",
    },
  },
  overrides: {
    MuiTableRow: {
      root: {
        "&:last-child td": {
          borderBottom: 0,
        },
      },
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router />
    </MuiThemeProvider>
  );
}

export default App;
