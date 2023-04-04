import styled from '@emotion/styled'
import dayjs from 'dayjs'
import { useImmerAtom } from 'jotai-immer'
import { KeyboardEvent, forwardRef, useRef } from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'
import { Simplify } from 'type-fest'

import TextArea from '@atlaskit/textarea'
import { token } from '@atlaskit/tokens'

import { messagesAtom } from '#Components/Chat/state'
import { Flex, ReactIconButton } from '#Components/Primitives'

import { IChatMessage } from '#Models/chat'

namespace Box {
  export const Wrapper = styled(Flex)`
    align-items: stretch;
    gap: ${token('space.100')};
  `

  export const Send = styled(Flex)`
    align-items: flex-end;
    align-self: stretch;
  `

  export const Input = styled(Flex)`
    max-height: 10rem;
    width: 100%;
    align-items: center;
    overflow: auto;
    background-color: ${token('color.background.input')};
    transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    border: 2px solid ${token('color.border')};
    border-radius: ${token('space.050')};

    /* @ts-ignore */
    &:hover,
    &:has(> [contenteditable]:hover) {
      background-color: ${token('color.background.input.hovered')};
    }

    &:focus,
    &:active,
    /* @ts-ignore */
    &:has(> [contenteditable]:focus),
    &:has(> [contenteditable]:active) {
      background-color: ${token('color.background.input.pressed')};
      border: 2px solid ${token('color.border.focused')};
    }
  `
}

namespace Item {
  const BaseInput = styled.div`
    width: 100%;
    padding: ${token('space.100')} ${token('space.150')};

    font-size: ${token('font.size.200')};
    /* display: flex; */
    vertical-align: middle;
    /* box-shadow: ${token('elevation.shadow.raised')}; */
    outline: 0px;

    &:before {
      content: attr(data-placeholder);
      color: ${token('color.text.subtlest')};
      position: absolute;
      pointer-events: none;
      opacity: 0;
    }

    &:empty:before {
      opacity: 1;
    }
  `

  export const Send = styled(ReactIconButton)`
    --icon-size: ${token('space.300')};
    --button-size: ${token('space.600')};

    border-radius: ${token('border.radius.round', '9999px')};
  `

  export const Input = forwardRef((props: any, ref) => {
    return (
      <BaseInput
        contentEditable={true}
        role="textbox"
        onPaste={(el) => {
          el.preventDefault()
          const plainText = el.clipboardData.getData('text/plain')
          document.execCommand('insertText', false, plainText)
        }}
        ref={ref}
        {...props}
      />
    )
  })
}

interface Args {
  // onAddMessage?: (added: IChatMessage, message: IChatMessage[]) => void
}

export default function InputBar(props: Simplify<Args>) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [_, setMessages] = useImmerAtom(messagesAtom)

  function addMessage() {
    if (inputRef.current == null) return
    setMessages((messages) => {
      const added = {
        name: 'Arthur',
        message: inputRef.current!.textContent ?? '',
        timestamp: dayjs().toISOString(),
      }
      messages?.push(added)
      // props.onAddMessage?.(added, messages ?? [])
    })
    inputRef.current.innerHTML = ''
  }

  return (
    <Box.Wrapper>
      {/* <TextArea placeholder="Type a message" /> */}
      <Box.Input>
        <Item.Input
          data-placeholder="Type a message"
          onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              addMessage()
            }
          }}
          ref={inputRef}
        />
      </Box.Input>
      {/* <Item.Input data-placeholder="Type a message" /> */}
      <Box.Send>
        <Item.Send
          appearance="primary"
          iconBefore={<RiSendPlaneFill />}
          onClick={() => {
            addMessage()
          }}
        />
      </Box.Send>
    </Box.Wrapper>
  )
}
