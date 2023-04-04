import { token } from '#Theme/index'
import styled from '@emotion/styled'
import { useAtomValue } from 'jotai'
import { useEffect, useLayoutEffect, useRef } from 'react'

import Chat from '#Components/Chat'
import { messagesAtom } from '#Components/Chat/state'
import Header from '#Components/Header'
import InputBar from '#Components/InputBar'
import { Flex, Stack } from '#Components/Primitives'

namespace Box {
  export const Main = styled.div`
    --width: 800px;
    display: grid;
    /* max-width: 800px; */
    margin: 0 auto;
    /* padding: ${token('space.300')}; */
    height: 100vh;
    grid-template-rows: max-content auto max-content;
    overflow-y: auto;
  `

  export const Input = styled(Flex)`
    padding: ${token('space.200')};
    /* padding-top: ${token('space.200')}; */
    justify-content: center;

    &[data-overflow] {
      box-shadow: ${token('elevation.shadow.overflow')};
    }

    & > * {
      width: var(--width);
    }
  `

  export const Chat = styled(Flex)`
    /* padding: ${token('space.300')}; */
    overflow-y: auto;
    overflow-x: hidden;
    justify-content: center;

    & > * {
      width: var(--width);

      & > :first-of-type {
        padding-top: ${token('space.300')};
      }

      & > :last-of-type {
        padding-bottom: ${token('space.300')};
      }
    }
  `
}

export default function Room() {
  const inputBoxRef = useRef<HTMLDivElement>(null)
  const chatBoxRef = useRef<HTMLDivElement>(null)
  const messages = useAtomValue(messagesAtom)

  useEffect(() => {
    const current = chatBoxRef.current
    if (current == null) return
    const maxY = current.scrollHeight - current.clientHeight
    current.scrollTo(0, maxY)
  }, [messages])

  return (
    <Box.Main>
      <Header />
      <Box.Chat ref={chatBoxRef}>
        <Chat />
      </Box.Chat>
      <Box.Input ref={inputBoxRef}>
        <InputBar />
      </Box.Input>
    </Box.Main>
  )
}
