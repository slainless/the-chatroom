import styled from '@emotion/styled'
import { useAtom, useAtomValue } from 'jotai'

import { token } from '@atlaskit/tokens'

import ChatRenderer from '#Components/Chat/Renderer'
import { messagesAtom } from '#Components/Chat/state'
import { Flex, Stack } from '#Components/Primitives'

namespace Box {
  export const Main = styled(Stack)`
    padding-bottom: ${token('space.200')};
    /* width: 100%; */
    gap: ${token('space.075')};
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

export default function Chat() {
  const messages = useAtomValue(messagesAtom)
  return (
    <Box.Main>
      {/* <ChatBubble.Group> */}
      <ChatRenderer messages={messages ?? []} />
      {/* </ChatBubble.Group> */}
    </Box.Main>
  )
}
