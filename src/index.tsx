//бібліотеки
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import './i18n';
//стилі
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
//компоненти
import App from './App';
import theme from 'constants/styleThema';
//код
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>

      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
);
