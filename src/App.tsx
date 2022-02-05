import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import { Provider } from 'react-redux'
import { AppRouter } from './routes/AppRouter';
import {store} from './store/store';


function App() {
  
  const theme = createTheme({
    typography: {
      h4: {
        "fontSize": 40,
      },
      "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
      "fontSize": 14,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500
     }
  });

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
