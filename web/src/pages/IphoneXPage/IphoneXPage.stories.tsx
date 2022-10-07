import type { ComponentMeta } from '@storybook/react'

import IphoneXPage from './IphoneXPage'

export const generated = () => {
  return <IphoneXPage />
}

export default {
  title: 'Pages/IphoneXPage',
  component: IphoneXPage,
} as ComponentMeta<typeof IphoneXPage>
