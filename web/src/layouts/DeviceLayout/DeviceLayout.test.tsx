import { render } from '@redwoodjs/testing/web'

import DeviceLayout from './DeviceLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DeviceLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DeviceLayout />)
    }).not.toThrow()
  })
})
