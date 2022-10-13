import { CSSProperties, FC } from 'react'

const BaseLayout: FC<{ style?: CSSProperties }> = ({ children, style }) => {
  return <div style={style}>{children}</div>
}

export default BaseLayout
