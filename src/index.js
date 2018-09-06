import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer, { DEFAULT_STATE } from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, DEFAULT_STATE);
sagaMiddleware.run(rootSaga);

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
