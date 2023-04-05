import styled from '@emotion/styled'
import {
  Provider,
  atom,
  getDefaultStore,
  useAtom,
  useAtomValue,
  useSetAtom,
} from 'jotai'
import debounce from 'lodash.debounce'
import { useEffect, useLayoutEffect } from 'react'

import { token } from '@atlaskit/tokens'

import { Action, Data, Param, stores } from '#Atoms/chat'
import Chat from '#Components/Chat'
import Header from '#Components/Header'
import InputBar from '#Components/InputBar'
import { Flex, Stack } from '#Components/Primitives'

namespace Box {
  export const Main = styled.div`
    --width: 700px;
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
    flex-direction: column-reverse;
    align-items: center;
    justify-content: end;
    position: relative;

    & > * {
      width: var(--width);
      /* margin: ${token('space.300')} 0; */

      & > :first-of-type {
        padding-top: ${token('space.300')};
      }

      & > :last-of-type {
        padding-bottom: ${token('space.300')};
      }
    }
  `
}

const getChatRoot = () => document.querySelector('#chat-box')?.parentElement

const updateCursorAtom = atom(null, (get, set) => {
  const messages = get(Data.chats)
  set(Param.cursor, messages[0])
})

const scrollPosAtom = atom(0)

function Main() {
  const cursor = useAtomValue(Param.cursor)
  const updateCursor = useSetAtom(updateCursorAtom)
  const room = useAtomValue(Param.room, {
    store: getDefaultStore(),
  })

  const messages = useAtomValue(Data.chats)
  const loadMessage = useSetAtom(Action.loadChats)

  const [scrollPos, setScrollPos] = useAtom(scrollPosAtom)

  useEffect(() => {
    const el = document.querySelector('#chat-box')
    if (el == null) return
    const root = el.parentElement
    const target = el.querySelector(':first-child')
    if (target == null) return

    const observer = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) if (entry.isIntersecting) updateCursor()
      },
      { root, rootMargin: '100px', threshold: 0.5 }
    )
    observer.observe(target)

    return () => {
      observer.disconnect()
    }
  }, [messages])

  useEffect(() => {
    // console.log('effect:cursor', room, cursor)
    loadMessage()
  }, [cursor, room])

  // restore scroll position on message dom change or room change
  useLayoutEffect(() => {
    // console.log('on-message-layout:', getChatRoot()?.scrollTop ?? 0)
    getChatRoot()?.scrollTo({ top: scrollPos })
  }, [messages])

  // save scroll position before message change
  useEffect(() => {
    // console.log('on-cursor:', getChatRoot()?.scrollTop ?? 0)
    setScrollPos(getChatRoot()?.scrollTop ?? 0)
  }, [cursor])

  const subscribed = useAtomValue(Data.subscribed)
  useEffect(() => {
    setScrollPos(0)
    getChatRoot()?.scrollTo({ top: 0 })
  }, [subscribed])

  return (
    <Box.Main>
      <Header />
      <Box.Chat>
        <Chat id={'chat-box'} />
        {/* <Box.ScrollTarget /> */}
      </Box.Chat>
      <Box.Input>
        <InputBar />
      </Box.Input>
    </Box.Main>
  )
}

export default function Room() {
  const room = useAtomValue(Param.room)
  return (
    <Provider store={stores[room]}>
      <Main />
    </Provider>
  )
}
