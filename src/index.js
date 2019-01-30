import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'
import './index.css';
import TodoList from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <TodoList />
    </Provider>,
    document.getElementById('root')
);


serviceWorker.unregister();
