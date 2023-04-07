import styled from '@emotion/styled'
import { useAtomValue } from 'jotai'
import { Fragment } from 'react'

import Spinner from '@atlaskit/spinner'
import { token } from '@atlaskit/tokens'

import { Data } from '#Atoms/user'
import { Stack, Text } from '#Components/Primitives'

namespace Box {
  export const Main = styled(Stack)`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: ${token('elevation.surface')};
    align-items: center;
    justify-content: center;
    gap: ${token('space.100')};
  `

  export const Content = styled(Stack)`
    align-items: center;
    gap: ${token('space.050')};
  `
}

namespace Item {
  export const Title = styled(Text)``
  export const Subtitle = styled(Text)`
    font-size: ${token('font.size.100')};
    font-weight: ${token('font.weight.regular')};
  `
}

export default function Welcome({ children, display }: any) {
  if (display)
    return (
      <Box.Main>
        <Spinner size="large" />
        <Box.Content>
          <Item.Title variant="h700">Welcome</Item.Title>
          <Item.Subtitle variant="h200">
            Please wait while we generate your data
          </Item.Subtitle>
        </Box.Content>
      </Box.Main>
    )
  else return <Fragment>{children}</Fragment>
}
