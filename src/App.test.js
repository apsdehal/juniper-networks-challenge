import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import fs from 'fs';

jest.mock('react-codemirror');

const setValueAndClick = (input, value, button) => {
  input.node.value = value;
  button.simulate('click');
}

it('should match snapshot', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper).toMatchSnapshot();
});


// Functional test
it('correctly transforms query to json', () => {
  const wrapper = mount(<App />);
  const inputs = wrapper.find('input');
  const buttons = wrapper.find('button');
  const selects = wrapper.find('select');


  // Set table_name
  inputs.at('0').node.value = 'traffic_table';
  inputs.at('0').simulate('change', {target: {value: 'traffic_table'}});

  // Set start_time
  inputs.at('1').node.value = 1484853180000000;
  inputs.at('1').simulate('change', {target: {value: 1484853180000000}});

  // Set end_time
  inputs.at('2').node.value = 1484853780000000;
  inputs.at('2').simulate('change', {target: {value: 1484853780000000}});

  // Set select fields
  setValueAndClick(inputs.at('3'), 'time', buttons.at('0'));
  setValueAndClick(inputs.at('3'), 'source_vn', buttons.at('0'));
  setValueAndClick(inputs.at('3'), 'destination_vn', buttons.at('0'));
  setValueAndClick(inputs.at('3'), 'source_port', buttons.at('0'));
  setValueAndClick(inputs.at('3'), 'destination_port', buttons.at('0'));
  setValueAndClick(inputs.at('3'), 'traffic', buttons.at('0'));

  const values = [
    ['AND', 'source_vn', '=', 'frontend-vn' ],
    ['AND', 'source_port', '=', 9000],
    ['OR', 'destination_vn', '!=', 'backend-vn'],
    ['AND', 'destination_port', '=', 9001]
  ];

  values.map((x) => {
    selects.at('0').node.value = x[0]
    inputs.at('4').node.value = x[1];
    selects.at('1').node.value = x[2];
    inputs.at('5').node.value = x[3];

    buttons.at('1').simulate('click');
  });

  const correctData = JSON.stringify(JSON.parse(fs.readFileSync('./src/test_data/example.json')));
  expect(JSON.stringify(JSON.parse(wrapper.state('query')))).toBe(correctData)
});
