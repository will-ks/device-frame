import { render } from '@redwoodjs/testing/web'

import IpadMini from './IpadMini'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('IpadMini', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IpadMini />)
    }).not.toThrow()
  })
})
