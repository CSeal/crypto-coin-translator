import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/containers';
import * as serviceWorker from './serviceWorker';
import  './style.scss';
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
