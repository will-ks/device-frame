// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Toolbar> = (args) => {
//   return <Toolbar {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Toolbar from './Toolbar'

export const generated = () => {
  return <Toolbar />
}

export default {
  title: 'Components/Toolbar',
  component: Toolbar,
} as ComponentMeta<typeof Toolbar>
