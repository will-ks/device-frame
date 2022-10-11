import { render } from '@redwoodjs/testing/web'

import Iphone8 from './Iphone8'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Iphone8', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Iphone8 />)
    }).not.toThrow()
  })
})
