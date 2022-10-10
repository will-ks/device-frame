import type { ComponentMeta, ComponentStory } from '@storybook/react'

import DeviceLayout from './DeviceLayout'

export const generated: ComponentStory<typeof DeviceLayout> = (args) => {
  return <DeviceLayout {...args} />
}

export default {
  title: 'Layouts/DeviceLayout',
  component: DeviceLayout,
} as ComponentMeta<typeof DeviceLayout>
