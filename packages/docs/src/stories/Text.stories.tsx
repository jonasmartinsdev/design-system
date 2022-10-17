import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@jonas-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi esse nesciunt at quas sunt minima quod reiciendis accusantium, quo nihil asperiores hic excepturi cumque, consequatur labore eius harum ipsum aliquid.',
  },

  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
