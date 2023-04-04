import { atom, getDefaultStore, useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import { setGlobalTheme } from '@atlaskit/tokens'

export type ColorMode = 'light' | 'dark' | 'auto'

export const colorModeAtom = atomWithStorage<ColorMode>('darkMode', 'auto')

export default function GlobalTheme() {
  const [colorMode] = useAtom(colorModeAtom, {
    store: getDefaultStore(),
  })
  setGlobalTheme({
    light: 'light',
    dark: 'dark',
    colorMode,
    spacing: 'spacing',
    typography: 'typography',
  })
  return null
}
