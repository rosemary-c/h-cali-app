import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import Router from './components/Router';
import { initializeHeap } from "./utils/heap";
import { AppContextProvider } from "context/appContext";

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
  React.useEffect(() => {
    initializeHeap();
  }, []);
  
  return (
    <MuiThemeProvider theme={theme}>
      <AppContextProvider>
        <Router />
      </AppContextProvider>
    </MuiThemeProvider>
  );
}

export default App;
