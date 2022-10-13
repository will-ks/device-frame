import { FC } from 'react'

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
  deviceScreenHeight: number
  padding?: number
  attribution: Attribution
  url: string
  deviceId: string
  displayMode: DisplayMode
  themeColor: string
}> = ({
  deviceScreenHeight,
  padding = 100,
  children,
  attribution,
  url,
  deviceId,
  displayMode,
  themeColor,
}) => {
  const { height } = useWindowSize()

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
        <nav style={{ alignItems: 'flex-start' }}>
          <details open={url === DEFAULTS.url} style={{ margin: 0 }}>
            <summary>Options</summary>
            <Toolbar
              url={url}
              deviceId={deviceId}
              style={{ backgroundColor: 'var(--color-bg)' }}
              displayMode={displayMode}
              themeColor={themeColor}
            />
          </details>
          <a href={'https://github.com/will-ks/device-frame'}>
            <img
              alt="Github"
              src={githubIcon}
              style={{ width: '2rem', margin: 0 }}
            />
          </a>
        </nav>
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
                transform: `scale(${(height - padding) / deviceScreenHeight})`,
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
              bottom: '0.1rem',
              right: '0.5rem',
              padding: 0,
            }}
          >
            <figcaption>
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
