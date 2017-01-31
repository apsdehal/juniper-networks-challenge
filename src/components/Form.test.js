import { render } from 'enzyme';
import React from 'react';
import Form from './Form';

it('should render correct number of elements', () => {
  const props = {
    vars: {
      form: {
        select_fields: [],
        where_clause: []
      }
    },
    dispatch: () => {}
  }
  const wrapper = render(<Form vars={props.vars} dispatch={props.dispatch}/>);

  expect(wrapper.find('input').length).toBe(6);
  expect(wrapper.find('button').length).toBe(2);
  expect(wrapper.find('select').length).toBe(2);
});
