import { FC } from 'react'

const IphoneX: FC<{ url: string }> = ({ url }) => {
  return (
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
  )
}

export default IphoneX
