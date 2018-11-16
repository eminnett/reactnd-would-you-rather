import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';

const persistConfig = { key: 'root', storage }
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>,
  document.getElementById('root')
)
