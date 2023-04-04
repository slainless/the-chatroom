import styled from '@emotion/styled'
import { getDefaultStore, useAtom } from 'jotai'
import {
  RiEmotion2Line,
  RiHazeFill,
  RiMoonLine,
  RiSunLine,
} from 'react-icons/ri'

import Button from '@atlaskit/button'
import { token } from '@atlaskit/tokens'

import { ColorMode, colorModeAtom } from '#Components/Effect/GlobalTheme'

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

function switchTheme(colorMode: ColorMode): ColorMode {
  if (colorMode == 'light') return 'dark'
  if (colorMode == 'dark') return 'auto'
  return 'light'
}

function Icon(props: { colorMode: ColorMode }) {
  if (props.colorMode == 'light') return <RiSunLine />
  if (props.colorMode == 'dark') return <RiMoonLine />
  return <RiEmotion2Line />
}

export default function ThemeToggleButton() {
  const [colorMode, setColorMode] = useAtom(colorModeAtom, {
    store: getDefaultStore(),
  })
  return (
    <IconButton
      iconBefore={<Icon colorMode={colorMode} />}
      onClick={() => setColorMode(switchTheme(colorMode))}
    ></IconButton>
  )
}
