import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RootStoreType } from './interface';
import { RootProvider } from './store/rootContext';
import { RootStore } from './store/rootStore';

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);
const store: RootStoreType = new RootStore();

root.render(
  <RootProvider value={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RootProvider>
);
