import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Counter from '../../components/Counter';

describe('Tests in Counter', () => {
  let wrapper = shallow(<Counter />);

  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });

  test('should show Counter component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should show value prop', () => {
    const value = 100;
    const wrapper = shallow(<Counter value={value} />);
    const valueText = Number(wrapper.find('p').text());
    expect(valueText).toBe(value);
  });

  test('should add with + button', () => {
    wrapper.find('button').at(0).simulate('click');
    const valueText = Number(wrapper.find('p').text());
    expect(valueText).toBe(16);
  });

  test('should add with - button', () => {
    wrapper.find('button').at(1).simulate('click');
    const valueText = Number(wrapper.find('p').text());
    expect(valueText).toBe(14);
  });

  test('should add with reset button', () => {
    const value = 100;
    const wrapper = shallow(<Counter value={value} />);
    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    const valueText = Number(wrapper.find('p').text());
    console.log(valueText);
    expect(valueText).toBe(value);
  });
});
