import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { StoreProvider } from './store/context';
import { RootStoreType } from './interface';
import { store } from './store';

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.Fragment>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.Fragment>
);
