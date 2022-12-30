import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';
import { BrowserRouter } from "react-router-dom";
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
