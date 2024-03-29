import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Store } from './models';
const store = new Store();

ReactDOM.render(
  <BrowserRouter>
    <App store={store} />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
