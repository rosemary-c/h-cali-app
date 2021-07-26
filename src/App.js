import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from 'components/AppBar';
import Body from './components/Wrapper';

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
      <Body />
    </MuiThemeProvider>
  );
}

export default App;
