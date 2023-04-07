import styled from '@emotion/styled'
import { Meta, StoryObj } from '@storybook/react'

import { token } from '@atlaskit/tokens'

import Welcome from '#Layouts/Welcome'

const Box = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${token('elevation.surface.sunken')};
`

export default {
  component: Welcome,
  title: 'Layouts/Welcome',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Box>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Welcome>

type Story = StoryObj<typeof Welcome>
export const Default: Story = {}
