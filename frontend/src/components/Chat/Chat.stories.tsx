import styled from '@emotion/styled'
import { Meta, StoryObj } from '@storybook/react'
import dayjs, { Dayjs } from 'dayjs'
import { Provider, createStore, getDefaultStore, useSetAtom } from 'jotai'
import { useEffect } from 'react'

import { token } from '@atlaskit/tokens'

import { Data } from '#Atoms/chat'
import { Data as UserData } from '#Atoms/user'
import Chat from '#Components/Chat'
import { Model } from '#Models/chat'

const Box = styled.div`
  padding: ${token('space.150')} ${token('space.600')};
  margin: ${token('space.150')};
  width: 50%;
  height: 100%;
  background-color: ${token('elevation.surface.sunken')};
`

const msg = (name: string, body: string, at: Dayjs) => ({
  user_id: name,
  body,
  created_at: at,
})

const messages = [
  msg('Anonymous#1', 'Testing', dayjs().subtract(10, 'minutes')),
  msg('Anonymous#2', 'Apa kabar brother', dayjs().subtract(9, 'minutes')),
  msg('Anonymous#2', 'Yoi mantap jiwa', dayjs().subtract(8.5, 'minutes')),
  msg('Anonymous#4', 'Testing', dayjs().subtract(10, 'minutes')),
  msg('Anonymous#5', 'Test lagiiii.......', dayjs().subtract(10, 'minutes')),
]

const useSetMessages = (msg: Partial<Model.Message>[]) => {
  const setSubsribed = useSetAtom(Data.subscribed)
  useEffect(() => {
    setSubsribed((draft) => msg)
  }, [])
}

export default {
  component: Chat,
  title: 'Components/Chat/Renderer',
  decorators: [
    (Story) => {
      return (
        <Box>
          <Story />
        </Box>
      )
    },
  ],
} satisfies Meta<typeof Chat>

type Story = StoryObj<typeof Chat>

export const Default: Story = {
  decorators: [
    (Story) => {
      //@ts-expect-error
      useSetMessages(messages)
      return <Story />
    },
  ],
}
export const WithCurrentUser: Story = {
  decorators: [
    (Story) => {
      useSetMessages([
        //@ts-expect-error
        ...messages,
        //@ts-expect-error
        msg('Current User', 'This is what i sent', dayjs()),
        //@ts-expect-error
        msg('MeToo', 'This is other reply', dayjs()),
      ])
      return <Story />
    },
  ],
}
