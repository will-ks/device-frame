import { render } from '@redwoodjs/testing/web'

import FramePage from './FramePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FramePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FramePage url={'https://example.com'} />)
    }).not.toThrow()
  })
})
