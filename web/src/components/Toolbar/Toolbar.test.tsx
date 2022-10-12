import { render } from '@redwoodjs/testing/web'

import Toolbar from './Toolbar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Toolbar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Toolbar />)
    }).not.toThrow()
  })
})
