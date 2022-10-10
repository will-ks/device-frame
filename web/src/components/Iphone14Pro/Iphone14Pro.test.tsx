import { render } from '@redwoodjs/testing/web'

import Iphone14Pro from './Iphone14Pro'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Iphone14Pro', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Iphone14Pro />)
    }).not.toThrow()
  })
})
