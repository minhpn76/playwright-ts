/**
 * @jest-environment jsdom
*/
import CommentBox from '../CommentBox'
import { mount, configure } from 'enzyme'
import Root from '../../Root'


const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
configure({ adapter: new Adapter() });

let wrapped: any

beforeEach(() => {
  // wrapped = mount(<CommentBox />);
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  )
})

// afterEach(() => {
// 	wrapped.ummount()
// })

it('has a text area and two button', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(2)
})

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    })
    wrapped.update()
  })

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
  })

  it('when form is submiited, textarea gets emptied', () => {
    wrapped.find('form').simulate('submit')
    wrapped.update()
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })
})
