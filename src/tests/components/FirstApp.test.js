// import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import FirstApp from '../../components/FirstApp';

describe('tests in FirstApp', () => {
  // test('should show message "Hello Ernesto"', () => {
  //   const hi = 'Hello Ernesto';
  //   const { getByText } = render(<FirstApp hi={'Hello Ernesto'} />);
  //   expect(getByText(hi) + '!').toBeInTheDocument();
  // });

  test('should show FirstApp component', () => {
    const wrapper = shallow(<FirstApp hi="Hello Ernesto" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show sub sent from props', () => {
    const hi = 'Hello Ernesto';
    const sub = 'Testiiiiing!!!!!!!';
    const wrapper = shallow(<FirstApp hi={hi} sub={sub} />);
    const paragraphText = wrapper.find('p').text();
    expect(paragraphText).toBe(sub);
  });
});
