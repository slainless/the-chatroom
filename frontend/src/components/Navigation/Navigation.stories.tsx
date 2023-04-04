import { Meta, StoryObj } from '@storybook/react'
import { Provider, createStore } from 'jotai'

import Navigation from '.'
import mockNavigationStore from './Stories'

export default {
  component: Navigation,
  title: 'Components/Navigation',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Provider store={mockNavigationStore}>
        <Story />
      </Provider>
    ),
  ],
} satisfies Meta<typeof Navigation>

type Story = StoryObj<typeof Navigation>

export const Default: Story = {}
