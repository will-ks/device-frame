import { FC } from 'react'

const GalaxyNote8: FC = ({ children }) => {
  return (
    <div className="marvel-device note8">
      <div className="inner"></div>
      <div className="overflow">
        <div className="shadow"></div>
      </div>
      <div className="speaker"></div>
      <div className="sensors"></div>
      <div className="more-sensors"></div>
      <div className="sleep"></div>
      <div className="volume"></div>
      <div className="camera"></div>
      <div className="screen">{children}</div>
    </div>
  )
}

export default GalaxyNote8
