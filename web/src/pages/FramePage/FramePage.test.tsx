import { render } from '@redwoodjs/testing/web'

import FramePage, { DEFAULTS, devices, DisplayMode } from './FramePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FramePage', () => {
  it('renders successfully with no path', () => {
    expect(() => {
      render(<FramePage path={''} />)
    }).not.toThrow()
  })
})

describe.each([
  ...Object.keys(devices).flatMap((d) =>
    Object.values(DisplayMode).map((v) => [d, v])
  ),
])('FramePage', (deviceId, displayMode) => {
  it(`renders successfully with path, device ${deviceId}, display mode ${displayMode}`, () => {
    expect(() => {
      render(
        <FramePage
          path={`${deviceId}/${displayMode}/${DEFAULTS.themeColor}/${DEFAULTS.url}`}
        />
      )
    }).not.toThrow()
  })
})
