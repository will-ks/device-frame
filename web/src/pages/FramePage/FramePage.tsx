import { FC } from 'react'

import Iphone14Pro from 'src/components/Iphone14Pro/Iphone14Pro'
import DeviceLayout from 'src/layouts/DeviceLayout/DeviceLayout'
import { isValidUrl } from 'src/lib/url-helpers'
import NotFoundPage from 'src/pages/NotFoundPage/NotFoundPage'

export const devices: {
  [deviceId: string]: {
    name: string
    logicalSize: {
      width: number
      height: number
    }
    component: FC
  }
} = {
  iphone: {
    name: 'iPhone',
    logicalSize: {
      width: 393,
      height: 852,
    },
    component: ({ children }) => <Iphone14Pro>{children}</Iphone14Pro>,
  },
  iphone14pro: {
    name: 'iPhone 14 Pro',
    logicalSize: {
      width: 393,
      height: 852,
    },
    component: ({ children }) => <Iphone14Pro>{children}</Iphone14Pro>,
  },
}

const FramePage: FC<{ routeGlob: string }> = ({ routeGlob }) => {
  const { device, url } = (() => {
    const firstPartOfRouteGlob = routeGlob.split('/')[0]
    const firstPartOfRouteGlobIsDeviceName =
      Object.keys(devices).includes(firstPartOfRouteGlob)
    return {
      device:
        devices[
          firstPartOfRouteGlobIsDeviceName
            ? firstPartOfRouteGlob
            : 'iphone14pro'
        ],
      url: firstPartOfRouteGlobIsDeviceName
        ? routeGlob.split('/').slice(1).join('/')
        : routeGlob,
    }
  })()
  if (!isValidUrl(url)) {
    return <NotFoundPage />
  }
  return (
    <DeviceLayout deviceScreenHeight={device.logicalSize.height}>
      {device.component({
        children: (
          <iframe
            title={'Framed site'}
            id={'framed-site'}
            style={{ height: '100%', width: '100%', borderRadius: 'inherit' }}
            src={decodeURIComponent(url)}
          />
        ),
      })}
    </DeviceLayout>
  )
}

export default FramePage
