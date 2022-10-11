// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof IpadMini> = (args) => {
//   return <IpadMini {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import IpadMini from './IpadMini'

export const generated = () => {
  return <IpadMini />
}

export default {
  title: 'Components/IpadMini',
  component: IpadMini,
} as ComponentMeta<typeof IpadMini>
