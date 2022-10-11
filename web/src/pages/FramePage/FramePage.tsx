import { FC } from 'react'

import { useMedia, useTimeout } from 'react-use'

import { useLocation } from '@redwoodjs/router'

import GalaxyNote8 from 'src/components/GalaxyNote8/GalaxyNote8'
import IpadMini from 'src/components/IpadMini/IpadMini'
import Iphone14Pro from 'src/components/Iphone14Pro/Iphone14Pro'
import Iphone8 from 'src/components/Iphone8/Iphone8'
import IphoneX from 'src/components/IphoneX/IphoneX'
import DeviceLayout, {
  Attribution,
} from 'src/layouts/DeviceLayout/DeviceLayout'
import { isValidUrl } from 'src/lib/url-helpers'
import NotFoundPage from 'src/pages/NotFoundPage/NotFoundPage'

export const devices: {
  [deviceId: string]: {
    name: string
    logicalSize: {
      width: number
      height: number
    }
    attribution: Attribution
    component: FC
    padding?: number
  }
} = {
  iphone: {
    name: 'iPhone 14 Pro',
    logicalSize: {
      width: 393,
      height: 852,
    },
    attribution: {
      imageName: 'iPhone 14 Pro vector',
      imageUrl:
        'https://commons.wikimedia.org/wiki/File:IPhone_14_Pro_vector.svg',
      authorUrl: 'https://commons.wikimedia.org/wiki/User:TheGoldenBox',
      authorName: 'Rafael Fernandez',
      licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.en',
      licenceName: 'CC BY-SA 4.0',
      trademarkString:
        'iPhone® is a trademark of Apple Inc., registered in the U.S. and other countries.',
    },
    component: ({ children }) => <Iphone14Pro>{children}</Iphone14Pro>,
  },
  'iphone-x': {
    name: 'iPhone X',
    logicalSize: {
      width: 375,
      height: 812,
    },
    attribution: {
      imageName: 'iPhone X frame',
      imageUrl: 'https://github.com/marvelapp/devices.css',
      authorUrl: 'https://github.com/marvelapp',
      authorName: 'Marvelapp',
      licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.en',
      licenceName: 'MIT',
      trademarkString:
        'iPhone® is a trademark of Apple Inc., registered in the U.S. and other countries.',
    },
    padding: 120,
    component: ({ children }) => <IphoneX>{children}</IphoneX>,
  },
  'iphone-8': {
    name: 'iPhone 8',
    logicalSize: {
      width: 375,
      height: 667,
    },
    attribution: {
      imageName: 'iPhone 8 frame',
      imageUrl: 'https://github.com/marvelapp/devices.css',
      authorUrl: 'https://github.com/marvelapp',
      authorName: 'Marvelapp',
      licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.en',
      licenceName: 'MIT',
      trademarkString:
        'iPhone® is a trademark of Apple Inc., registered in the U.S. and other countries.',
    },
    padding: 260,
    component: ({ children }) => <Iphone8>{children}</Iphone8>,
  },
  'ipad-mini': {
    name: 'iPad mini',
    logicalSize: {
      width: 768,
      height: 1024,
    },
    attribution: {
      imageName: 'iPad mini frame',
      imageUrl: 'https://github.com/marvelapp/devices.css',
      authorUrl: 'https://github.com/marvelapp',
      authorName: 'Marvelapp',
      licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.en',
      licenceName: 'MIT',
      trademarkString:
        'iPad® and iPad mini® are trademarks of Apple Inc., registered in the U.S. and other countries.',
    },
    padding: 40,
    component: ({ children }) => <IpadMini>{children}</IpadMini>,
  },
  'galaxy-note-8': {
    name: 'Galaxy Note 8',
    logicalSize: {
      width: 414,
      height: 846,
    },
    attribution: {
      imageName: 'Galaxy Note 8 frame',
      imageUrl: 'https://github.com/marvelapp/devices.css',
      authorUrl: 'https://github.com/marvelapp',
      authorName: 'Marvelapp',
      licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.en',
      licenceName: 'MIT',
    },
    component: ({ children }) => <GalaxyNote8>{children}</GalaxyNote8>,
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
          firstPartOfRouteGlobIsDeviceName ? firstPartOfRouteGlob : 'iphone'
        ],
      url: firstPartOfRouteGlobIsDeviceName
        ? routeGlob.split('/').slice(1).join('/')
        : routeGlob,
    }
  })()
  const { search, hash } = useLocation()
  const darkMode = useMedia('(prefers-color-scheme: dark)')
  const [loadingTookTooLong] = useTimeout(4_000)
  if (!isValidUrl(url)) {
    return <NotFoundPage />
  }
  return (
    <DeviceLayout
      deviceScreenHeight={device.logicalSize.height}
      attribution={device.attribution}
      padding={device.padding}
    >
      {device.component({
        children: (
          <>
            <iframe
              title={'Framed site'}
              id={'framed-site'}
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 'inherit',
                backgroundColor: '#242424',
                zIndex: -1,
                boxShadow: darkMode
                  ? '-31px 31px 62px #1c1822, 31px -31px 62px #282230'
                  : '-31px 31px 62px #d4d4d4, 31px -31px 62px #ffffff',
              }}
              src={`${url}${search ?? ''}${hash ?? ''}`}
            />
            {loadingTookTooLong() && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  textAlign: 'center',
                  width: '100%',
                  color: 'var(--text-main-dark)',
                  zIndex: -2,
                }}
              >
                Seems like the iframe may be having trouble loading. Check the
                developer console.
              </div>
            )}
          </>
        ),
      })}
    </DeviceLayout>
  )
}

export default FramePage
