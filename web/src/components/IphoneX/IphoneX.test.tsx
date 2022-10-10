import { render } from '@redwoodjs/testing/web'

import IphoneX from './IphoneX'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('IphoneX', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IphoneX />)
    }).not.toThrow()
  })
})
