import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';
import { theme } from 'styles/theme';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }

  body {
    max-width: 1224px;
    margin: 0 auto;
    background-color: #1E252B;
    color: #FFFFFF8c;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>

  </React.StrictMode>
);