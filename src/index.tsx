import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RootStoreType } from './interface';
import { RootProvider } from './store/rootContext';
import rootStore from './store/rootStore';

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);
const RootStore: RootStoreType = rootStore();

root.render(
  <RootProvider value={RootStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RootProvider>
);
