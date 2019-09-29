import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Routes from './routes';

import "styles/base/_main.sass";  // Global styles
import "styles/base/_common.sass";  // Global styles
import "styles/_style.sass";  // Css-module styles

import { Provider } from "react-redux";
import store from "./stores/Root.js";

function renderApp () {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Routes/>
      </AppContainer>
    </Provider>,
    document.getElementById('app')
  );
};

renderApp();

// Webpack Hot Module Replacement API
if (module.hot) {
  if (module.hot.status() === 'ready') {
    renderApp();
  }
}
