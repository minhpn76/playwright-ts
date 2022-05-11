/**
 * @jest-environment jsdom
*/
import React from 'react';
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

import { mount, configure, shallow } from 'enzyme';

configure({adapter: new Adapter()});
import CustomForm, { ICustomForm } from '../form'


let wrapped: any

const propsCustomForm: ICustomForm = {
  onSubmit: () => jest.fn()
}
beforeEach(() => {
  wrapped = mount(
    <CustomForm {...propsCustomForm} />
  )
})

// afterEach(() => {
// 	wrapped.ummount()
// })

it('has a input and a button', () => {
  expect(wrapped.find('input').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})

describe('the input', () => {
  beforeEach(() => {
    wrapped.find('input').simulate('change', {
      target: { value: 'edward.pn' }
    })
    wrapped.update()
  })
  

  it('has a text area that users can type in', () => {
    // expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
  })

  // it('when form is submiited, textarea gets emptied', () => {
  //   wrapped.find('form').simulate('submit')
  //   wrapped.update()
  //   expect(wrapped.find('textarea').prop('value')).toEqual('')
  // })

})