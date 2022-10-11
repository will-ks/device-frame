import { render } from '@redwoodjs/testing/web'

import GalaxyNote8 from './GalaxyNote8'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GalaxyNote8', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GalaxyNote8 />)
    }).not.toThrow()
  })
})
