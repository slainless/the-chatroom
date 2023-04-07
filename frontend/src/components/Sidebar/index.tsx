import styled from '@emotion/styled'
import { atom, useAtom, useAtomValue } from 'jotai'
import { useEffect } from 'react'
import { RiHashtag } from 'react-icons/ri'
import { Link, useParams } from 'react-router-dom'

import Avatar from '@atlaskit/avatar'
import Button, { ButtonGroup } from '@atlaskit/button'
import PremiumIcon from '@atlaskit/icon/glyph/premium'
import { token } from '@atlaskit/tokens'

import { Param } from '#Atoms/chat'
import { Data } from '#Atoms/user'
import { Flex, Stack, Text } from '#Components/Primitives'
import { generateAvatar, generateColor } from '#Functions/theme'

namespace Box {
  export const Main = styled.div`
    display: grid;
    grid-template-rows: auto max-content;
    border-right: 1px solid ${token('color.border')};
    background-color: ${token('elevation.surface')};
    width: 17em;
  `

  export const Top = styled(Stack)`
    gap: ${token('space.300')};
    padding: ${token('space.300')};
  `

  export const Bottom = styled(Flex)`
    align-items: center;
    gap: ${token('space.100')};
    padding: ${token('space.150')} ${token('space.300')};
    border-top: 1px solid ${token('color.border')};
  `

  export const User = styled(Stack)`
    /* gap: ${token('space.050')}; */
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

  export const Name = styled(Text)``

  export const Status = styled(Text)``

  export const RoomButton = (props: { children?: any; roomId: string }) => {
    const [roomId] = useAtom(Param.room)
    const currentRoomId = roomId === props.roomId
    return (
      <StyledButton
        component={Link}
        // @ts-expect-error
        to={'room/' + props.roomId}
        iconBefore={<RiHashtag />}
        appearance={currentRoomId ? 'primary' : 'subtle'}
        // isDisabled={currentRoomId}
        isSelected={currentRoomId}
        {...props}
      />
    )
  }
}

export default function Sidebar() {
  const [_, setRoomId] = useAtom(Param.room)
  const user = useAtomValue(Data.user)
  const params = useParams()
  useEffect(() => {
    setRoomId((params.roomId as any) ?? null)
  })

  return (
    <Box.Main>
      <Box.Top>
        <Item.Subtitle variant="h300">Public</Item.Subtitle>
        <Box.Navi>
          <Item.RoomButton roomId="welcome">welcome</Item.RoomButton>
          <Item.RoomButton roomId="general">general</Item.RoomButton>
          <Item.RoomButton roomId="ask">ask</Item.RoomButton>
        </Box.Navi>
      </Box.Top>
      <Box.Bottom>
        <Avatar
          presence={'online'}
          src={user?.user_id ? generateAvatar(user.user_id) : undefined}
        ></Avatar>
        <Box.User>
          <Item.Name
            variant="h400"
            style={{
              color: generateColor(`@${user?.user_id}`),
            }}
          >
            @{user?.user_id}
          </Item.Name>
          <Item.Status variant="h100">Online</Item.Status>
        </Box.User>
      </Box.Bottom>
      {/* <Item.Subtitle variant="h300">Private</Item.Subtitle> */}
    </Box.Main>
  )
}
