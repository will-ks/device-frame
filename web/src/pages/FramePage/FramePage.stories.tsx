import type { ComponentMeta } from '@storybook/react'

import FramePage from './FramePage'

export const generated = () => {
  return <FramePage url={'https://example.com'} />
}

export default {
  title: 'Pages/FramePage',
  component: FramePage,
} as ComponentMeta<typeof FramePage>
