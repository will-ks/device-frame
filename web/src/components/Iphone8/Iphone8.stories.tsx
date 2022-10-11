// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Iphone8> = (args) => {
//   return <Iphone8 {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Iphone8 from './Iphone8'

export const generated = () => {
  return <Iphone8 />
}

export default {
  title: 'Components/Iphone8',
  component: Iphone8,
} as ComponentMeta<typeof Iphone8>
