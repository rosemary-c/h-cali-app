import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from 'components/AppBar';
import Router from './components/Router';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2886FC'
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="static"/>
      <Router />
    </MuiThemeProvider>
  );
}

export default App;
