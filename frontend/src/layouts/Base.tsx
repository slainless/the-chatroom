import styled from '@emotion/styled'
import { useAtomValue } from 'jotai'

import { token } from '@atlaskit/tokens'

import { Data } from '#Atoms/user'
import Sidebar from '#Components/Sidebar'
import Welcome from '#Components/Welcome'

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
    background-color: ${token('elevation.surface.sunken')};
    /* background-color:#99adff; */
    /* background-image: url(${bg}); */
    /* backdrop-filter: blur(5px); */
  `
}

export default function BaseLayout({ children }: any) {
  const user = useAtomValue(Data.user)
  return (
    <Welcome display={user == null}>
      <Box.Layout>
        <Sidebar />
        <Box.View>{children}</Box.View>
        {/* <StatusBar/> */}
      </Box.Layout>
    </Welcome>
  )
}
