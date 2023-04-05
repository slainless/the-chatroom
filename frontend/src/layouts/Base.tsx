import styled from '@emotion/styled'

import { token } from '@atlaskit/tokens'

import Header from '#Components/Header'
import Navigation from '#Components/Navigation'
import { Stack } from '#Components/Primitives'
import Sidebar from '#Components/Sidebar'

import bg from './bg.data?raw'

namespace Box {
  export const Layout = styled.div`
    display: grid;
    grid-template-columns: max-content auto;
    min-height: 100vh;
  `

  export const Main = styled.div`
    display: grid;
    grid-template-rows: max-content auto;
  `

  export const View = styled.div`
    /* padding: ${token('space.200')}; */
    background-color: ${token('color.background.neutral')};
    /* background-color:#99adff; */
    background-image: url(${bg});
    /* backdrop-filter: blur(5px); */
  `
}

export default function BaseLayout({ children }: any) {
  return (
    <Box.Layout>
      <Sidebar />
      <Box.View>{children}</Box.View>

      {/* <StatusBar/> */}
    </Box.Layout>
  )
}
