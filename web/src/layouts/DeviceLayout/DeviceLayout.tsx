import { FC } from 'react'

import { useWindowSize } from 'react-use'

import BaseLayout from 'src/layouts/BaseLayout/BaseLayout'

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
}> = ({ deviceScreenHeight, padding = 100, children, attribution }) => {
  const { height } = useWindowSize()

  return (
    <BaseLayout>
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
    </BaseLayout>
  )
}

export default DeviceLayout
