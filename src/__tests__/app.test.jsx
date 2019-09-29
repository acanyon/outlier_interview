import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Routes from '../routes';
import store from "../stores/Root.js";
import { Provider } from "react-redux";

configure({ adapter: new Adapter() });

describe('app', () => {
  it('renders without crashing', () => {
    mount(
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  });
});
