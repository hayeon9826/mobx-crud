import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.Fragment>
    {/* store 정의 */}
    <Provider store={store}>
      {/* router 정의 */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.Fragment>
);
