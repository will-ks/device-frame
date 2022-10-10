// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Iphone14Pro> = (args) => {
//   return <Iphone14Pro {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Iphone14Pro from './Iphone14Pro'

export const generated = () => {
  return <Iphone14Pro />
}

export default {
  title: 'Components/Iphone14Pro',
  component: Iphone14Pro,
} as ComponentMeta<typeof Iphone14Pro>
