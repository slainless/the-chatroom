import styled from '@emotion/styled'

import Button, { LoadingButton } from '@atlaskit/button'
import { token } from '@atlaskit/tokens'

export const ReactIconButton = styled(LoadingButton)`
  --icon-size: ${token('space.200')};
  --button-size: calc(${token('space.100')} + var(--icon-size));

  width: var(--button-size);
  height: var(--button-size);

  & svg {
    width: var(--icon-size);
    height: var(--icon-size);
  }
`
