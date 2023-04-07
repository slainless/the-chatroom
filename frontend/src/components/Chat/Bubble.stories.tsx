import styled from '@emotion/styled'
import { Meta, StoryObj } from '@storybook/react'
import { Provider, createStore } from 'jotai'

import { token } from '@atlaskit/tokens'

import Bubble from '#Components/Chat/Bubble'

const Box = styled.div`
  padding: ${token('space.150')} ${token('space.600')};
  margin: ${token('space.150')};
  width: 50%;
  height: 100%;
  background-color: ${token('elevation.surface.sunken')};
`

export default {
  component: Bubble,
  title: 'Components/Chat/Bubble',
  args: {
    name: 'A User Name',
    message: 'Just testing the bubble here...',
    time: '05:39 AM',
    avatar: true,
  },
  decorators: [
    (Story) => (
      <Box>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Bubble>

type Story = StoryObj<typeof Bubble>

export const Default: Story = {}
export const NoAvatar: Story = {
  args: { avatar: false },
}
export const RightAlign: Story = {
  args: { align: 'right' },
}
export const RightAlignNoAvatar: Story = {
  name: 'Right Align, No Avatar',
  args: { align: 'right', avatar: false },
}
