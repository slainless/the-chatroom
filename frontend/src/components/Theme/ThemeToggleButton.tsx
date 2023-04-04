import styled from '@emotion/styled'
import { useAtom } from 'jotai'
import { RiMoonLine, RiSunLine } from 'react-icons/ri'

import Button from '@atlaskit/button'
import { token } from '@atlaskit/tokens'

import { colorModeAtom } from '#Components/Theme/GlobalTheme'

export const IconButton = styled(Button)`
  --size: ${token('space.300')};
  width: var(--size);
  height: var(--size);

  & svg {
    --size: ${token('space.200')};

    width: var(--size);
    height: var(--size);
  }
`

export default function ThemeToggleButton() {
  const [colorMode, setColorMode] = useAtom(colorModeAtom)
  return (
    <IconButton
      iconBefore={colorMode == 'light' ? <RiSunLine /> : <RiMoonLine />}
      onClick={() => setColorMode(colorMode == 'light' ? 'dark' : 'light')}
    ></IconButton>
  )
}
