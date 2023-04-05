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
    /* padding: ${token('space.300')} 0; */
    /* width: 100%; */
    gap: ${token('space.075')};
    /* height: max-content; */
  `
}

// namespace ChatBubble {
//   export const Group = styled(Stack)`
//   `

//   // export const Message = styled.div`
//   //   width: max-content;
//   //   max-width: 75ch;
//   //   padding: ${token('space.150')};
//   //   border-radius: ${token('space.050')};
//   //   box-shadow: ${token('elevation.shadow.raised')};
//   //   background-color: ${token('elevation.surface')};
//   // `
// }

// export default function Chat() {
//   const messages = useAtomValue(Data.currentRoomChats)
//   return (
//     <Box.Main>
//       {/* <ChatBubble.Group> */}
//       <ChatRenderer messages={messages ?? []} />
//       {/* </ChatBubble.Group> */}
//     </Box.Main>
//   )
// }

const Chat = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref: Ref<HTMLDivElement>) => {
    const { children, ...rest } = props
    const messages = useAtomValue(Data.chats)
    // console.log('chat', messages)
    return (
      <Box.Main ref={ref} {...rest}>
        {/* <ChatBubble.Group> */}
        <ChatRenderer messages={messages ?? []} />
        {/* </ChatBubble.Group> */}
      </Box.Main>
    )
  }
)

export default Chat
