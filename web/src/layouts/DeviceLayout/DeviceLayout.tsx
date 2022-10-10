import { FC } from 'react'

import { useWindowSize } from 'react-use'

import BaseLayout from 'src/layouts/BaseLayout/BaseLayout'

const DeviceLayout: FC<{
  deviceScreenHeight: number
  padding?: number
}> = ({ deviceScreenHeight, padding = 80, children }) => {
  const { height } = useWindowSize()

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
            transform: `scale(calc(${
              height - padding
            } / ${deviceScreenHeight}))`,
          }}
          className={'deviceFrame'}
        >
          {children}
        </div>
      </div>
    </BaseLayout>
  )
}

export default DeviceLayout
