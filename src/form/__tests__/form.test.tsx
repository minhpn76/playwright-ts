/**
 * @jest-environment jsdom
*/
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure, shallow } from 'enzyme';

configure({adapter: new Adapter()});
import CustomForm, { ICustomForm } from '../form'


let wrapped: any

const propsCustomForm: ICustomForm = {
  onSubmit: () => {}
}
beforeEach(() => {
  wrapped = shallow(
    <CustomForm {...propsCustomForm} />
  )
})

// afterEach(() => {
// 	wrapped.ummount()
// })

it('has a text area and a button', () => {
  expect(wrapped.find('input').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})

// describe('the text area', () => {
//   beforeEach(() => {
//     wrapped.find('textarea').simulate('change', {
//       target: { value: 'new comment' }
//     })
//     wrapped.update()
//   })

//   it('has a text area that users can type in', () => {
//     expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
//   })

//   it('when form is submiited, textarea gets emptied', () => {
//     wrapped.find('form').simulate('submit')
//     wrapped.update()
//     expect(wrapped.find('textarea').prop('value')).toEqual('')
//   })
// })