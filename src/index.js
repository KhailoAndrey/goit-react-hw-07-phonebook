import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

const theme = {
  colors: {
    black: 'black',
    white: 'white',
    accent: 'tomato',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
