import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { createHashHistory } from 'history';
import Main from './main';

import configure from './store/configure';

const history = createHashHistory();

const initialState = (window as any).initialReduxState;
const store = configure(history, initialState);

ReactDOM.render(<Main store={store} history={history}/>, document.getElementById('root'));
serviceWorker.register();
