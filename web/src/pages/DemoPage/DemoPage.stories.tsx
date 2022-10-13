import type { ComponentMeta } from '@storybook/react'

import DemoPage from './DemoPage'

export const generated = () => {
  return <DemoPage />
}

export default {
  title: 'Pages/DemoPage',
  component: DemoPage,
} as ComponentMeta<typeof DemoPage>
