import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { Simplify } from 'type-fest'

import Avatar from '@atlaskit/avatar'
import { token } from '@atlaskit/tokens'

import { Flex, Text } from '#Components/Primitives'

import { IChatMessage } from '#Models/chat'

namespace Box {
  export const Message = styled.div`
    width: max-content;
    max-width: 75ch;
    padding: ${token('space.150')};
    border-radius: ${token('space.050')};
    box-shadow: ${token('elevation.shadow.raised')};
    background-color: ${token('elevation.surface')};
    position: relative;
  `

  export const Wrapper = styled(Flex)`
    gap: ${token('space.100')};
    position: relative;

    &[data-align='right'] {
      justify-content: flex-end;
    }
  `

  export const Avatar = styled.div`
    position: absolute;
    transform: translateX(calc(var(--align, 1) * 100%))
      translateX(calc(var(--align, 1) * ${token('space.050')}));

    [data-align='left'] > & {
      --align: -1;
    }
  `
}

namespace Item {
  export const Name = styled(Text)``

  export const Time = styled.span`
    position: absolute;
    right: ${token('space.100')};
    bottom: ${token('space.025')};
    font-size: ${token('font.size.050')};
    color: ${token('color.text.subtlest')};
    opacity: 0.8;
  `

  export const PseudoTime = styled.span`
    visibility: hidden;
    font-size: ${token('font.size.050')};
  `

  export const Message = styled.div`
    font-size: ${token('font.size.100')};
  `
}

interface Args extends Omit<Partial<IChatMessage>, 'timestamp'> {
  align?: 'left' | 'right'
  avatar?: string | boolean
  children?: ReactNode
  time?: string
}

export default function Bubble(props: Simplify<Args>) {
  return (
    <Box.Wrapper data-align={props.align ?? 'left'}>
      <Box.Avatar>{props.avatar && <Avatar />}</Box.Avatar>
      <Box.Message>
        {props.name && <Item.Name variant="h200">{props.name}</Item.Name>}
        <Item.Message>
          {props.message ?? props.children}
          <Item.PseudoTime>{props.time}</Item.PseudoTime>
        </Item.Message>
        <Item.Time>{props.time}</Item.Time>
      </Box.Message>
    </Box.Wrapper>
  )
}
