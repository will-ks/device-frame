import { render } from '@redwoodjs/testing/web'

import { DEFAULTS } from 'src/pages/FramePage/FramePage'

import DeviceLayout from './DeviceLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DeviceLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <DeviceLayout
          deviceId={DEFAULTS.device}
          url={DEFAULTS.url}
          themeColor={DEFAULTS.themeColor}
          displayMode={DEFAULTS.displayMode}
          deviceScreenHeight={700}
          attribution={{
            licenceName: 'test',
            licenceUrl: 'https://example.com',
            authorUrl: 'https://example.com',
            imageName: 'test',
            authorName: 'test',
            imageUrl: 'https://example.com',
          }}
        />
      )
    }).not.toThrow()
  })
})
