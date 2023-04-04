import styled from '@emotion/styled'
import { atom, useAtom } from 'jotai'
import { useEffect } from 'react'
import { RiHashtag } from 'react-icons/ri'
import { Link, useParams } from 'react-router-dom'

import Button, { ButtonGroup } from '@atlaskit/button'
import PremiumIcon from '@atlaskit/icon/glyph/premium'
import { token } from '@atlaskit/tokens'

import { Stack, Text } from '#Components/Primitives'

namespace Box {
  export const Main = styled(Stack)`
    border-right: 1px solid ${token('color.border')};
    background-color: ${token('elevation.surface')};
    padding: ${token('space.300')};
    width: 17em;
    gap: ${token('space.300')};
  `

  export const Navi = styled(Stack)`
    /* margin-top: ${token('space.200')}; */
    gap: ${token('space.050')};
    margin-bottom: ${token('space.200')};
  `
}

namespace Item {
  export const Subtitle = styled(Text)`
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-left: ${token('space.0')};
  `

  const StyledButton = styled(Button)`
    text-align: left;
    font-family: ${token('font.family.monospace')};

    & svg {
      --size: ${token('space.200')};

      width: var(--size);
      height: var(--size);
    }

    /* &::before {
      content: '#';
    } */
  `

  export const RoomButton = (props: { children?: any; roomId: string }) => {
    const [roomId] = useAtom(roomIdAtom)
    const currentRoomId = roomId === props.roomId
    return (
      <StyledButton
        component={Link}
        // @ts-expect-error
        to={'room/' + props.roomId}
        iconBefore={<RiHashtag />}
        appearance={currentRoomId ? 'primary' : 'subtle'}
        isDisabled={currentRoomId}
        {...props}
      />
    )
  }
}

const roomIdAtom = atom<string | undefined>('')
export default function Sidebar() {
  const [_, setRoomId] = useAtom(roomIdAtom)
  const params = useParams()
  useEffect(() => {
    setRoomId(params.roomId)
  })

  return (
    <Box.Main>
      <Item.Subtitle variant="h300">Public</Item.Subtitle>
      <Box.Navi>
        <Item.RoomButton roomId="welcome">welcome</Item.RoomButton>
        <Item.RoomButton roomId="general">general</Item.RoomButton>
        <Item.RoomButton roomId="ask">ask</Item.RoomButton>
      </Box.Navi>
      <Item.Subtitle variant="h300">Private</Item.Subtitle>
    </Box.Main>
  )
}
