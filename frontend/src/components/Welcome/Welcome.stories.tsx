import { Meta, StoryObj } from '@storybook/react'

import Welcome from '#Components/Welcome'

export default {
  component: Welcome,
  title: 'Components/Welcome Screen',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    display: true,
  },
} satisfies Meta<typeof Welcome>

type Story = StoryObj<typeof Welcome>
export const Default: Story = {}
