/**
 * @jest-environment jsdom
*/
import { shallow, configure } from 'enzyme'
import CommentBox from '../CommentBox'
import CommentList from '../CommentList'
import App from '../App'


const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
configure({adapter: new Adapter()});

//reused with beforeEach
let wrapped: any
beforeEach(() => {
  wrapped = shallow(<App />)
})

it('should be show box comment', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('should be show list comment', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})
