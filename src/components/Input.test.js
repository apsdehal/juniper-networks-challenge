import { mount } from 'enzyme';
import React from 'react';
import Input from './Input';

it('should mount and dispatch properly', () => {
  let myMock = jest.fn();
  const wrapper = mount(<Input type="text" title="table_name" dispatch={myMock} description="Table name used for query"/>)

  expect(wrapper.find('input').length).toBe(1);
  wrapper.find('input').at(0).node.value = 'Hello';
  wrapper.find('input').at(0).simulate('change');
  expect(myMock.mock.calls.length).toBe(1);
})
