import styled from '@emotion/styled'

import EmptyState from '@atlaskit/empty-state'
import { token } from '@atlaskit/tokens'

import { ReactComponent as Illustration } from '#Assets/undraw_begin_chat_re_v0lw.svg'

const Box = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
`

const StyledIllustration = styled(Illustration)`
  width: 18em;
  margin-bottom: ${token('space.200')};
  --i-accent-color: ${token('color.chart.blue.boldest')};
  --i-hair-color: #2f2e41;
  --i-line-accessory: ${token('color.background.accent.gray.subtler')};
  --i-line-at-feet: ${token('elevation.surface.sunken')};
  --i-border: ${token('color.background.accent.gray.subtle')};
  --i-red-border: ${token('color.chart.red.boldest')};
  --i-surface: ${token('elevation.surface')};
`

export default function Welcome() {
  return (
    <Box>
      <EmptyState
        header="Welcome to The Chatroom"
        description={`Start by picking which room do you want to participate in.
        You can also open a private room in the future.`}
        renderImage={() => <StyledIllustration />}
        width="narrow"
      />
    </Box>
  )
}
