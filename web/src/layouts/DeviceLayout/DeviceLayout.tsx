import { FC, useState } from 'react'

import { useWindowSize } from 'react-use'

import Toolbar from 'src/components/Toolbar/Toolbar'
import BaseLayout from 'src/layouts/BaseLayout/BaseLayout'
import { DEFAULTS, DisplayMode } from 'src/pages/FramePage/FramePage'

import githubIcon from './GitHub-Mark-64px.png'

export type Attribution = {
  authorName: string
  authorUrl: string
  imageName: string
  imageUrl: string
  licenceName: string
  licenceUrl: string
  trademarkString?: string
}

const DeviceLayout: FC<{
  deviceScreenLogicalSize: { height: number; width: number }
  padding?: number
  attribution: Attribution
  url: string
  deviceId: string
  displayMode: DisplayMode
  themeColor: string
}> = ({
  deviceScreenLogicalSize,
  padding = 100,
  children,
  attribution,
  url,
  deviceId,
  displayMode,
  themeColor,
}) => {
  const { height, width } = useWindowSize()
  const [initialWidth] = useState(width)
  if (
    initialWidth <= deviceScreenLogicalSize.width + 15 &&
    url !== DEFAULTS.url
  ) {
    location.replace(url)
  }

  return (
    <BaseLayout>
      <header
        style={{
          position: 'absolute',
          zIndex: 1,
          textAlign: 'left',
          padding: '0.1rem 0.5rem',
          maxWidth: 'unset',
          width: '100%',
        }}
      >
        <nav
          style={{
            alignItems: 'flex-start',
            padding: '1rem 1rem 0 1rem',
            position: 'absolute',
            marginBottom: 0,
          }}
        >
          <details open={url === DEFAULTS.url} style={{ margin: 0 }}>
            <summary style={{ backgroundColor: 'var(--color-bg)' }}>
              Options
            </summary>
            <Toolbar
              url={url}
              deviceId={deviceId}
              style={{
                backgroundColor: 'var(--color-bg)',
                borderRadius: 'var(--border-radius)',
              }}
              displayMode={displayMode}
              themeColor={themeColor}
            />
          </details>
        </nav>
        <a
          href={'https://github.com/will-ks/device-frame'}
          style={{
            position: 'absolute',
            right: '1rem',
            top: '1rem',
            backgroundColor: 'var(--color-bg)',
          }}
        >
          <img
            alt="Github"
            src={githubIcon}
            style={{ width: '2rem', margin: 0 }}
          />
        </a>
      </header>
      <main style={{ height: '100vh', width: '100vw', padding: 0 }}>
        <figure
          style={{
            width: '100%',
            height: '100%',
            margin: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                transform: `scale(${
                  (height - padding) / deviceScreenLogicalSize.height
                })`,
              }}
              id={'device-frame'}
            >
              {children}
            </div>
          </div>
          <footer
            style={{
              fontSize: 'x-small',
              position: 'absolute',
              bottom: '0rem',
              width: '100%',
              textAlign: 'right',
              padding: '0.5rem',
              backgroundColor: 'var(--color-bg)',
            }}
          >
            <figcaption style={{ textShadow: '0 0 10px #fff' }}>
              <div>
                {`"`}
                <a href={attribution.imageUrl}>{attribution.imageName}</a>
                {`"`} by{' '}
                <a href={attribution.authorUrl}>{attribution.authorName}</a> is
                licensed under{' '}
                <a href={attribution.licenceUrl}>{attribution.licenceName}</a>.
              </div>
              {attribution.trademarkString && (
                <div>{attribution.trademarkString}</div>
              )}
            </figcaption>
          </footer>
        </figure>
      </main>
    </BaseLayout>
  )
}

export default DeviceLayout
