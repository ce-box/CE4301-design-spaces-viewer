import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<StrictMode>
				<App />
			</StrictMode>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
)

serviceWorker.unregister()
