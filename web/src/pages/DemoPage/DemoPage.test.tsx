import { render } from '@redwoodjs/testing/web'

import DemoPage from './DemoPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DemoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DemoPage />)
    }).not.toThrow()
  })
})
