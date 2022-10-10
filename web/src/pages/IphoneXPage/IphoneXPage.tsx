import { FC } from 'react'

import IphoneX from 'src/components/IphoneX/IphoneX'
import DeviceLayout from 'src/layouts/DeviceLayout/DeviceLayout'

const IphoneXPage: FC<{ url: string }> = ({ url }) => {
  return (
    <DeviceLayout deviceScreenHeight={864}>
      <IphoneX url={url} />
    </DeviceLayout>
  )
}

export default IphoneXPage
