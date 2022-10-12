import { FC } from 'react'

import pipeNow from '@arrows/composition/pipeNow'
import { useTimeout } from 'react-use'

import { useLocation } from '@redwoodjs/router'

import GalaxyNote8 from 'src/components/GalaxyNote8/GalaxyNote8'
import IpadMini from 'src/components/IpadMini/IpadMini'
import Iphone14Pro from 'src/components/Iphone14Pro/Iphone14Pro'
import Iphone8 from 'src/components/Iphone8/Iphone8'
import IphoneX from 'src/components/IphoneX/IphoneX'
import DeviceLayout, {
  Attribution,
} from 'src/layouts/DeviceLayout/DeviceLayout'
import { isValidColor, isValidUrl } from 'src/lib/helpers'
import NotFoundPage from 'src/pages/NotFoundPage/NotFoundPage'

export enum DisplayMode {
  Fullscreen = 'fullscreen',
  Standalone = 'standalone',
}

export const devices: {
  [deviceId: string]: {
    id: string
    name: string
    logicalSize: {
      width: number
      height: number
    }
    headerHeight: number
    screenBorderRadius: number
    attribution: Attribution
    component: FC
    padding?: number
  }
} = {
  iphone: {
    id: 'iphone',
    name: 'iPhone 14 Pro',
    logicalSize: {
      width: 393,
      height: 852,
    },
    headerHeight: 54,
    screenBorderRadius: 20,
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
    id: 'iphone-x',
    name: 'iPhone X',
    logicalSize: {
      width: 375,
      height: 812,
    },
    headerHeight: 44,
    screenBorderRadius: 20,
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
    id: 'iphone-8',
    name: 'iPhone 8',
    logicalSize: {
      width: 375,
      height: 667,
    },
    headerHeight: 40,
    screenBorderRadius: 0,
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
    id: 'ipad-mini',
    name: 'iPad mini',
    logicalSize: {
      width: 768,
      height: 1024,
    },
    headerHeight: 20,
    screenBorderRadius: 0,
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
    id: 'galaxy-note-8',
    name: 'Galaxy Note 8',
    logicalSize: {
      width: 414,
      height: 846,
    },
    headerHeight: 44,
    screenBorderRadius: 10,
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

export const DEFAULTS = {
  device: 'iphone',
  displayMode: DisplayMode.Fullscreen,
  headerColour: '#EFEFF4',
}

const FramePage: FC<{ routeGlob: string }> = ({ routeGlob }) => {
  const { search, hash } = useLocation()
  const { url, displayMode, headerColour, device } = pipeNow(
    routeGlob.split('/'),
    ([firstGlobPart, ...routeGlob]) => {
      const deviceFromRoute =
        Object.keys(devices).includes(firstGlobPart) && devices[firstGlobPart]
      return deviceFromRoute
        ? {
            device: deviceFromRoute,
            routeGlob,
          }
        : {
            device: devices[DEFAULTS.device],
            routeGlob: [firstGlobPart, ...routeGlob],
          }
    },
    ({ routeGlob: [firstGlobPart, ...routeGlob], ...rest }) => {
      const displayModeFromRoute =
        Object.values(DisplayMode).includes(firstGlobPart as DisplayMode) &&
        (firstGlobPart as DisplayMode)
      return {
        ...(displayModeFromRoute
          ? {
              displayMode: displayModeFromRoute,
              routeGlob,
            }
          : {
              displayMode: DEFAULTS.displayMode,
              routeGlob: [firstGlobPart, ...routeGlob],
            }),
        ...rest,
      }
    },
    ({ routeGlob: [firstGlobPart, ...routeGlob], ...rest }) => {
      const headerColourFromRoute =
        isValidColor(decodeURIComponent(firstGlobPart)) &&
        decodeURIComponent(firstGlobPart)
      return {
        ...(headerColourFromRoute
          ? {
              headerColour: headerColourFromRoute,
              routeGlob,
            }
          : {
              headerColour: DEFAULTS.headerColour,
              routeGlob: [firstGlobPart, ...routeGlob],
            }),
        ...rest,
      }
    },
    ({ routeGlob, ...rest }) => {
      return {
        url: isValidUrl(routeGlob.join('/'))
          ? `${routeGlob.join('/')}${search ?? ''}${hash ?? ''}`
          : undefined,
        ...rest,
      }
    }
  )

  const [loadingTookTooLong] = useTimeout(4_000)

  if (!url) {
    return <NotFoundPage />
  }
  return (
    <DeviceLayout
      deviceScreenHeight={device.logicalSize.height}
      attribution={device.attribution}
      padding={device.padding}
      url={url}
      deviceId={device.id}
    >
      {device.component({
        children: (
          <>
            {displayMode !== DisplayMode.Fullscreen && (
              <div
                style={{
                  height: `${device.headerHeight}px`,
                  backgroundColor: headerColour,
                  width: '100%',
                  borderRadius: `${device.screenBorderRadius}px ${device.screenBorderRadius}px 0 0`,
                }}
              ></div>
            )}
            <iframe
              title={'Framed site'}
              id={'framed-site'}
              style={{
                height: `calc(100% - ${
                  displayMode === DisplayMode.Standalone
                    ? device.headerHeight
                    : 0
                }px)`,
                width: '100%',
                borderRadius:
                  displayMode === DisplayMode.Fullscreen
                    ? 'inherit'
                    : `0 0 ${device.screenBorderRadius}px ${device.screenBorderRadius}px`,
                backgroundColor: '#242424',
                zIndex: -1,
                // TODO: Fix shadows z-index and re-enable this
                // boxShadow: darkMode
                //   ? '-31px 31px 62px #1c1822, 31px -31px 62px #282230'
                //   : '-31px 31px 62px #d4d4d4, 31px -31px 62px #ffffff',
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
