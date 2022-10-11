import { FC } from 'react'

const IpadMini: FC = ({ children }) => {
  return (
    <div className="marvel-device ipad silver">
      <div className="camera"></div>
      <div className="screen">{children}</div>
      <div className="home"></div>
    </div>
  )
}

export default IpadMini
