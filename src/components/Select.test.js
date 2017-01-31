import { mount } from 'enzyme';
import React from 'react';
import Select from './Select';

const setValueAndClick = (input, value, button) => {
  input.node.value = value;
  button.simulate('click');
}

it('should mount and dispatch properly', () => {
  let myMock = jest.fn();
  const wrapper = mount(<Select selected={[]} dispatch={myMock}/>)
  const wrapperTwo = mount(<Select selected={['time']} dispatch={myMock}/>)

  const inputs = wrapper.find('input');
  const buttons = wrapper.find('button');

  setValueAndClick(inputs.at('0'), 'time', buttons.at('0'));

  expect(myMock.mock.calls[0][1]).toEqual(['time']);
  wrapperTwo.find('button').at(0).simulate('click');
  expect(myMock.mock.calls[1][1]).toEqual([]);
});
