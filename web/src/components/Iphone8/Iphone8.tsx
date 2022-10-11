import { FC } from 'react'

const Iphone8: FC = ({ children }) => {
  return (
    <div className="marvel-device iphone8 silver">
      <div className="top-bar"></div>
      <div className="sleep"></div>
      <div className="volume"></div>
      <div className="camera"></div>
      <div className="sensor"></div>
      <div className="speaker"></div>
      <div className="screen">{children}</div>
      <div className="home"></div>
      <div className="bottom-bar"></div>
    </div>
  )
}

export default Iphone8
