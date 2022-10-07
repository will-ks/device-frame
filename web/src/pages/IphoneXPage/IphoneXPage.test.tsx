import { render } from '@redwoodjs/testing/web'

import IphoneXPage from './IphoneXPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('IphoneXPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IphoneXPage />)
    }).not.toThrow()
  })
})
