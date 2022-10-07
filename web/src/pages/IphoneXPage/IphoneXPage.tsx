import { FC } from 'react'

import BaseLayout from 'src/layouts/BaseLayout/BaseLayout'
import { useWindowSize } from 'src/lib/useWindowSize'
import './devices.min.css'

const IphoneXPage: FC<{ url: string }> = ({ url }) => {
  const { innerHeight } = useWindowSize()
  return (
    <BaseLayout>
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
            transform: `scale(calc(${innerHeight - 80} / 864))`,
          }}
        >
          <div className="marvel-device iphone-x">
            <div className="notch">
              <div className="camera"></div>
              <div className="speaker"></div>
            </div>
            <div className="top-bar"></div>
            <div className="sleep"></div>
            <div className="bottom-bar"></div>
            <div className="volume"></div>
            <div className="overflow">
              <div className="shadow shadow--tr"></div>
              <div className="shadow shadow--tl"></div>
              <div className="shadow shadow--br"></div>
              <div className="shadow shadow--bl"></div>
            </div>
            <div className="inner-shadow"></div>
            <div className="screen">
              <iframe
                title={'Framed site'}
                style={{ height: '100%', width: '100%' }}
                src={decodeURIComponent(url)}
              />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default IphoneXPage
