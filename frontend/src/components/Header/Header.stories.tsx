import { Meta, StoryObj } from '@storybook/react'

import Header from '#Components/Header'

export default {
  component: Header,
  title: 'Layouts/Header',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>

type Story = StoryObj<typeof Header>
export const Default: Story = {}
