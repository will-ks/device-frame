// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof IphoneX> = (args) => {
//   return <IphoneX {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import IphoneX from './IphoneX'

export const generated = () => {
  return <IphoneX />
}

export default {
  title: 'Components/IphoneX',
  component: IphoneX,
} as ComponentMeta<typeof IphoneX>
