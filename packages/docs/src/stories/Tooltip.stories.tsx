import { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps, Text } from '@jonas-ui/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {
    children: <Text>Lorem Ipsum</Text>,
    content: '21 de Outubro - Indisponível',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
