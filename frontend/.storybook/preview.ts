import type { Preview } from '@storybook/react'
import { Provider, useAtom, useSetAtom } from 'jotai'
import 'modern-normalize/modern-normalize.css'
import React, { useEffect } from 'react'
import { useDarkMode } from 'storybook-dark-mode'

import '@atlaskit/css-reset/dist/bundle.css'

import GlobalTheme, {
  colorModeAtom,
} from '../src/components/Effect/GlobalTheme'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export function ThemeProvider({ children }: any) {
  const darkMode = useDarkMode()
  const setColorMode = useSetAtom(colorModeAtom)
  useEffect(() => {
    setColorMode(darkMode ? 'dark' : 'light')
  }, [darkMode])
  return React.createElement(React.Fragment, {}, children)
}

export const decorators = [
  (Story) =>
    React.createElement(ThemeProvider, {}, [
      React.createElement(GlobalTheme),
      React.createElement(Story),
    ]),
]

export default preview
