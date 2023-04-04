import { atom, useAtom } from 'jotai'

import { setGlobalTheme } from '@atlaskit/tokens'

export const colorModeAtom = atom<'light' | 'dark' | 'auto'>('dark')

export default function GlobalTheme() {
  const [colorMode] = useAtom(colorModeAtom)
  setGlobalTheme({
    light: 'light',
    dark: 'dark',
    colorMode,
    spacing: 'spacing',
    typography: 'typography',
  })
  return null
}
