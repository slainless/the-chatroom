import styled from '@emotion/styled'
import { RiMoonLine, RiSunLine } from 'react-icons/ri'

import Button, { ButtonGroup } from '@atlaskit/button'
import { token } from '@atlaskit/tokens'

import { Stack, Text } from '#Components/Primitives'
import ThemeToggleButton from '#Components/Theme/ThemeToggleButton'

namespace Box {
  export const Main = styled(Stack)`
    border-bottom: 1px solid ${token('color.border')};
    padding: ${token('space.200')};
    background-color: ${token('elevation.surface')};
    /* width: 17em; */
    /* gap: ${token('space.300')}; */
  `
}

namespace Item {}

export default function Header() {
  return (
    <Box.Main>
      <ThemeToggleButton />
    </Box.Main>
  )
}
