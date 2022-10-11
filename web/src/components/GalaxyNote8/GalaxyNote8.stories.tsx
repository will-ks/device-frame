// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof GalaxyNote8> = (args) => {
//   return <GalaxyNote8 {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import GalaxyNote8 from './GalaxyNote8'

export const generated = () => {
  return <GalaxyNote8 />
}

export default {
  title: 'Components/GalaxyNote8',
  component: GalaxyNote8,
} as ComponentMeta<typeof GalaxyNote8>
