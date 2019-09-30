import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Rocket from '../../views/Rocket';
import store from "../../stores/Root.js";
import { MemoryRouter } from 'react-router';
import { Provider } from "react-redux";

jest.mock("axios");
const mockAxios = require("axios");

configure({ adapter: new Adapter() });

describe('Rocket', () => {
  it('renders without crashing', () => {
    const ROCKET_RESPONSE = {
      rocket_name: 'TEST',
      description: 'this is a test description',
      flickr_images: ['http://example.com/rocket']
    };
    mockAxios.get.mockImplementationOnce(() =>
       Promise.resolve(ROCKET_RESPONSE)
    );
    const providerWrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <Rocket />
          </MemoryRouter>
        </Provider>
    );
    const wrapper = shallow(providerWrapper.find('Rocket'));
    Promise.resolve(() => {
      expect(wrapper.find('img').prop('src')).toEqual('http://example.com/rocket');
      expect(wrapper.find('.rocket_name').text()).toEqual('TEST');
      expect(wrapper.find('.description').text()).toEqual('this is a test description');
    });
  });
});
