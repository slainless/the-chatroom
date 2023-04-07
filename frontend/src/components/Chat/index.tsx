import styled from '@emotion/styled'
import { useAtom, useAtomValue } from 'jotai'
import React, {
  FC,
  ForwardRefExoticComponent,
  HTMLAttributes,
  Ref,
  forwardRef,
} from 'react'

import { token } from '@atlaskit/tokens'

import { Data } from '#Atoms/chat'
import ChatRenderer from '#Components/Chat/Renderer'
import { Flex, Stack } from '#Components/Primitives'

namespace Box {
  export const Main = styled(Stack)`
    gap: ${token('space.075')};
    /* height: max-content; */
  `
}

const Chat = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref: Ref<HTMLDivElement>) => {
    const { children, ...rest } = props
    const messages = useAtomValue(Data.chats)
    return (
      <Box.Main ref={ref} {...rest}>
        <ChatRenderer messages={messages ?? []} />
      </Box.Main>
    )
  }
)

export default Chat
