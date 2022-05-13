/**
 * @jest-environment jsdom
*/
import Root from '../../Root'
import { mount, configure } from 'enzyme'
import CommentList from '../CommentList'


const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
configure({ adapter: new Adapter() });

let wrapped: any

beforeEach(() => {
  const initState = {
    comments: ['comment 1', 'comment 2']
  }
  wrapped = mount(
    <Root initState={initState}>
      <CommentList />
    </Root>
  )
})

afterEach(() => {})

it('creates on LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2)
})

it('shows the text for each comment', () => {
  expect(wrapped.render().text()).toContain('comment 1')
  expect(wrapped.render().text()).toContain('comment 2')
})
