import styled from '@emotion/styled'

import { token } from '@atlaskit/tokens'

import Header from '#Components/Header'
import Navigation from '#Components/Navigation'
import { Stack } from '#Components/Primitives'
import Sidebar from '#Components/Sidebar'

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
    background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='100' height='100' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='M37.13-4.8a2.7 2.7 0 00-1.79.75c-.56.56-.88 1.3-1.14 2.04-.54 1.46-1 2.96-1.38 4.48-.42 1.72-.78 3.56-1.96 4.9.88.88 2.3.72 3.52.5a267.6 267.6 0 0010.58-2.14c.48-.78-.16-1.76-.74-2.5a39.72 39.72 0 01-4.32-6.58c-.5-1-1.66-1.5-2.77-1.45zm-.61 4.58c.24-.06.46.18.6.4.78 1.24 1.58 2.48 2.4 3.72.12.18.28.38.5.4.06.24-.24.4-.48.48-1.48.4-2.98.68-4.52.84a42.4 42.4 0 001.5-5.84zm50.79 2.69c-.32.02-.63.1-.91.26-1.14.56-2.42 1.3-2.6 2.58-.07.54.1 1.1.28 1.63 1.3 4.13 2.87 8.19 4.68 12.14.17.38.68.5 1.07.37.42-.08.72-.37 1.02-.66l6.3-6.1c.86-.83.85-2.28.29-3.36-.75-1.45-2.2-2.34-3.59-3.16l-5.63-3.35c-.27-.19-.58-.3-.91-.35zm-.13 4.36c.1 0 .23.04.31.1.86.5 1.7 1.03 2.57 1.54l4.07 2.49c.4.23.84.65.68 1.08-.04.13-.17.24-.27.35l-3.03 2.7c-.09.07-.2.18-.31.16a.38.38 0 01-.27-.16c-.76-.82-.74-2.15-1.46-3.02-1.23-1.46-1.24-3.68-2.5-5.1.01-.1.1-.14.2-.14zM49.56 18.94c-1.14 0-2.38.5-2.84 1.52-.18.42-.22.88-.26 1.32a30.9 30.9 0 001.22 10.98l-.46.74a5 5 0 002.22.82c.8.04 1.66-.4 1.88-1.16.28-1 .98-1.84 1.64-2.66a77.67 77.67 0 006.06-8.62c.26-.44.52-.94.34-1.4-.28-.68-1.24-.68-2-.6-1.48.14-3 .06-4.46-.28-1.1-.26-2.2-.64-3.34-.66zm.82 2.64l3.92.6c.08.02.18.02.24.08.16.14.06.4-.04.6l-1.2 2.02c-.2.32-.38.66-.6.98-.62.94-1.34 1.86-2.14 2.68-.1.12-.3.22-.4.12a.22.22 0 01-.06-.14 22.3 22.3 0 01-.5-6.62c.02-.32.46-.36.78-.32zm-51.5 5.45c-.69-.04-1.4.46-1.47 1.14l-.64 7.62c-.12 1.38-.2 2.88.6 4.02a3.12 3.12 0 004.38.56 50.22 50.22 0 018.02-5.54c.3-.16.64-.36.76-.68.06-.2.04-.42 0-.6-.22-.86-1.16-1.32-2-1.66l-7.4-3.04c-.3-.12-.44-.46-.62-.72-.36-.58-.96-1.06-1.64-1.1zm100 0c-.69-.04-1.4.46-1.47 1.14l-.64 7.62c-.12 1.38-.2 2.88.6 4.02a3.12 3.12 0 004.38.56 50.18 50.18 0 018.02-5.54c.3-.16.64-.36.76-.68.06-.2.04-.42 0-.6-.22-.86-1.16-1.32-2-1.66l-7.4-3.04c-.3-.12-.44-.46-.62-.72-.36-.58-.96-1.06-1.64-1.1zM1.34 31.37c.13.03.26.08.38.14l3.16 1.44c.14.08.34.22.32.4-.02.12-.12.18-.22.26L.25 36.83c-.06-1.6.06-3.2.36-4.76.04-.26.12-.54.36-.66a.58.58 0 01.38-.04zm100 0c.13.03.26.08.38.14l3.16 1.44c.14.08.34.22.32.4-.02.12-.12.18-.22.26l-4.74 3.22c-.06-1.6.06-3.2.36-4.76.04-.26.12-.54.36-.66a.6.6 0 01.38-.04zM75.3 45.49c-1.53-.02-3.05 1.32-3.03 2.88.03 2.62-.19 5.26-.68 7.84-.16.93-.26 2.1.54 2.56 3.45-.98 6.9-2.02 10.32-3.14 1.18-.39 2.51-.92 2.87-2.1-1.68-.63-2.87-2.08-4.05-3.4a42.97 42.97 0 00-3.34-3.28c-.56-.56-1.23-1-1.98-1.26a2.84 2.84 0 00-.65-.1zm1.43 4.03a42.4 42.4 0 004.09 4.43 28.54 28.54 0 01-4.38 1.4c-.25.04-.59.04-.65-.2.18-.12.23-.37.25-.58.13-1.48.25-2.95.35-4.42.02-.26.1-.57.34-.63zm-16.87 9.85c-.8-.02-1.56.43-2.1 1.02-.55.6-.9 1.33-1.27 2.04l-4.03 8.22c.91.2 1.83.44 2.74.66 1.9.45 3.83.9 5.74 1.38a11 11 0 002.88.45c.77 0 1.62-.24 1.99-.92.36-.67-.23-1.73-.97-1.5.42-.2.7-.64.7-1.1.01-.19-.03-.4-.08-.57a34.2 34.2 0 00-2.58-6.99c-.64-1.27-1.59-2.65-3.02-2.7zm.36 3.47a.3.3 0 01.2.04c.1.06.15.16.2.25.62 1.3 1.16 2.63 1.6 4l.95 2.76c.06.2.08.45-.1.53-.09.05-.17.02-.25 0l-3.93-.93c-.35-.07-.69-.2-.99-.4-.28-.23-.45-.62-.29-.95l2.15-4.8c.08-.21.26-.46.46-.5zm-36.45.95c-.17.01-.33.04-.49.1-.49.2-.8.75-.85 1.28-.04.52.07 1.06.22 1.58l2.73 10.68c.15.52.47 1.18 1 1.06.35-.09.53-.45.66-.76a14.31 14.31 0 015.82-6.59 3.32 3.32 0 00.11-5.71 6.33 6.33 0 00-2.17-.76 44.6 44.6 0 00-7.03-.88zm2.17 3.51c1.56.2 3.13.5 4.65.85.13.04.05.27-.05.36l-3.88 4c-.06.07-.17.14-.26.1a32.1 32.1 0 01-1.3-4.87c-.06-.36.48-.48.84-.44zM11.8 76.63c-.33-.02-.66-.01-.98 0-.3.02-.65.05-.92.2-.29.18-.47.47-.63.75C8.15 79.46 7 81.33 5.9 83.2c-.82 1.39-1.7 2.86-1.66 4.48.02 1.22.7 2.51 1.85 2.84l8.43 2.37c.4.12.81.23 1.22.1.4-.06.8-.4.77-.83-.3-4.33-.83-8.65-1.64-12.9a3.72 3.72 0 00-.54-1.58c-.57-.78-1.54-1-2.53-1.04zm.42 3.94c.05 0 .09.02.12.06-.44 1.86.6 3.82.21 5.69-.23 1.1.43 2.27.14 3.35 0 .1-.06.18-.15.26-.1.08-.24.03-.36.01L8.24 89c-.14-.04-.3-.07-.4-.17-.35-.3-.16-.88.09-1.28.79-1.38 1.6-2.75 2.4-4.12l1.52-2.57c.08-.14.24-.28.37-.28zm75.86 3.21a4 4 0 00-.9.13c-1.2.3-2.33 1.3-2.33 2.52a64.68 64.68 0 013.7 7.99c.2.52.5 1.13 1.06 1.17.82.06 1.31-1.18 2.14-1.13.85.07 1.66-.46 2.17-1.12.5-.66.8-1.47 1.06-2.28.63-1.86 1.28-3.7 1.9-5.57.07-.22.17-.45.1-.68-.14-.43-.7-.56-1.14-.46-.44.1-.83.36-1.27.41-.36.06-.72-.02-1.05-.09l-2.69-.55c-.9-.18-1.83-.38-2.75-.34zm2.4 3.16l3.04.86-1.33 3.56c-.05.12-.15.27-.27.22a.37.37 0 01-.12-.14l-1.6-3.57c-.08-.19-.17-.39-.14-.59.03-.2.24-.4.43-.34zm-53.35 8.24c-.66.04-1.3.28-1.79.76-.56.56-.88 1.3-1.14 2.04-.54 1.46-1 2.96-1.38 4.48-.42 1.72-.78 3.56-1.96 4.9.88.88 2.3.72 3.52.5a267.6 267.6 0 0010.58-2.14c.48-.78-.16-1.76-.74-2.5a39.72 39.72 0 01-4.32-6.58c-.5-1-1.66-1.51-2.77-1.45zm-.61 4.58c.24-.06.46.18.6.4.78 1.24 1.58 2.48 2.4 3.72.12.18.28.38.5.4.06.24-.24.4-.48.48-1.48.4-2.98.68-4.52.84a42.4 42.4 0 001.5-5.84z'  stroke-width='1' stroke='none' fill='hsla(231, 48%, 48%, 0.07)'/><path d='M63.57-5.21c-.72.04-1.43.43-1.9 1a4.5 4.5 0 00-.87 2.77c-.04 2.65-.1 5.3-.13 7.95 0 .23 0 .48.16.6.24.26.65.13.98-.02 2.78-1.26 5.75-1.96 8.71-2.7.52-.1 1.02-.27 1.48-.54.97-.7 1.24-2.04.62-3.07-.33-.51-.31-1.25-.8-1.6-2.35-1.7-4.76-3.41-7.52-4.29a2.2 2.2 0 00-.72-.09zm.29 3.31c.3-.08.58.07.84.2l1.88.98c1.1.59 2.26 1.22 2.88 2.3-1.73.57-3.5 1.04-5.28 1.42-.15.01-.35.04-.5-.04-.09-.1-.1-.26-.1-.4-.06-1.48.04-3 .28-4.46zM8.96 1.25a1.8 1.8 0 00-1.16.53c-.58.6-.76 1.5-.9 2.32l-1.54 8.58c-.18.98-.36 2-.16 2.98.18.98.82 1.94 1.8 2.22a2.3 2.3 0 001.74-.24l.14-1.16c2.38-.06 4.42-1.7 6.24-3.24l5.7-4.8c.16-.14.32-.28.4-.48.18-.48-.22-.96-.64-1.26-1.58-1.18-3.6-1.58-5.52-2.08-1.9-.52-3.9-1.28-5.02-2.9-.24-.35-.65-.5-1.08-.47zm1.72 4.01c1.78.66 3.56 1.3 5.32 1.96.1.04.2.08.26.18.08.14-.02.32-.14.44a19.17 19.17 0 01-6.24 5.14c-.16.08-.38.16-.5.02-.08-.1-.06-.24-.04-.34.36-2.48.8-4.96 1.34-7.4zm64.94 12.23c-.66.05-1.29.44-1.36 1.08-.21 1.95-1.61 3.57-3.04 4.93-1.45 1.35-3.04 2.66-3.87 4.45-.23.46-.36 1.08.03 1.41.17.14.37.2.58.24l7.3 1.52c2.33.5 4.9.97 7.03-.1l.67.95c.6.01 1.21-.2 1.65-.62.73-.7.83-1.86.53-2.8A7.9 7.9 0 0083.58 26c-1.81-2.27-3.6-4.56-5.42-6.83-.51-.65-1.1-1.36-1.9-1.61a1.7 1.7 0 00-.64-.07zM24.2 21.02c-.4 0-.8.1-1.15.3-1.24.72-1.42 2.38-1.38 3.8a34.2 34.2 0 001.04 7.38c.04.18.1.38.2.54.22.4.68.66 1.14.64-.76.14-.78 1.36-.14 1.78.64.42 1.5.22 2.18-.14.86-.44 1.6-1.1 2.32-1.76l4.4-3.94 2.1-1.88-7.44-5.32c-.66-.46-1.32-.94-2.08-1.2-.38-.13-.8-.2-1.2-.2zm51.18.96c1.63 1.9 3.2 3.88 4.69 5.89.06.08.15.19.13.31-.04.18-.27.22-.45.23-2.72.05-5.45-.5-7.94-1.57-.16-.05-.33-.16-.33-.32 0-.12.08-.2.15-.28 1.23-1.42 2.5-2.83 3.75-4.25zm-51 2.58c.2-.06.47.07.65.22l4.16 3.2c.3.22.34.64.2.98-.14.32-.42.58-.68.82l-3.02 2.68c-.06.06-.12.12-.22.12-.2.02-.3-.22-.34-.42l-.48-2.88a32.52 32.52 0 01-.48-4.28c0-.1 0-.22.06-.32.04-.07.1-.1.16-.12zm22.89 17.66c-.55.04-1.08.25-1.46.64-2.02 2.09-3.32 4.73-4.6 7.35-.26.53.12 1.17.07 1.78-.06 1.2.8 2.25 2 2.41.52.05 1.04-.07 1.55-.2 2.95-.77 5.9-1.55 8.95-1.76.37-.03.79-.1.88-.45.07-.18-.04-.4-.15-.6-1.3-2.33-2.6-4.63-3.88-6.95a4.5 4.5 0 00-2.09-2.02c-.4-.17-.84-.23-1.27-.2zm-20.3 1.47a3.1 3.1 0 00-.86.06c-2.9.56-5.82.92-8.73 1.08-1.05.64-1.3 2.12-.92 3.3.37 1.18 1.27 2.1 2.1 3l1.9 1.98c.23.25.49.52.63.85.18.4.17.87.32 1.3.14.43.55.83.99.72.23-.05.38-.26.53-.43l3.72-4.56a7.69 7.69 0 001.38-2.11c.3-.78.31-1.74-.2-2.43-.48-.68.32-1.75-.16-2.42-.17-.22-.42-.31-.7-.34zm20.75 1.8c.9 1.2 1.7 2.47 2.37 3.8.06.12.13.28.08.4-.08.15-.27.22-.41.27-1.76.52-3.55.92-5.33 1.24.04-1.24.76-2.34 1.45-3.37l1.2-1.76c.15-.24.34-.5.64-.57zm-22.42 2.6c.05 0 .11-.01.17.02.1.08.04.24-.04.35l-2.31 3-2.34-2.11c-.15-.13-.08-.42.07-.55.15-.13.37-.16.57-.2l3.87-.51zM.47 54.37a1.5 1.5 0 00-1 .19c-.58.36-.88 1.06-.92 1.75-.03.31 0 .67-.2.92-1.7 2.05-3.4 4.12-5.08 6.19-.57.7-1.18 1.55-.97 2.4.05.19.14.39.29.54.25.22.65.24.99.23 3.25.05 6.5.4 9.69 1.08 1.7.28 3.3-.87 3.59-2.57.16-1.38-.62-2.67-1.38-3.83l-4.18-6.4a1.2 1.2 0 00-.83-.5zm100 0a1.5 1.5 0 00-1 .19c-.58.36-.88 1.06-.92 1.75-.03.31 0 .67-.2.92-1.7 2.05-3.4 4.12-5.08 6.19-.57.7-1.18 1.55-.97 2.4.05.19.14.39.29.54.25.22.65.24.99.23 3.25.05 6.5.4 9.69 1.08 1.7.28 3.3-.87 3.59-2.57.16-1.38-.62-2.67-1.38-3.83l-4.18-6.4a1.2 1.2 0 00-.83-.5zM-.3 59.4c.27 0 .47.2.63.41 1 1.23 1.87 2.58 2.58 4.02-1.9-.2-3.8-.38-5.7-.59-.13-.02-.24-.02-.32-.12-.1-.15.01-.37.1-.5l2.1-2.77c.15-.22.35-.44.61-.45zm100 0c.27 0 .47.2.63.41 1 1.23 1.87 2.58 2.58 4.02-1.9-.2-3.8-.38-5.7-.59-.13-.02-.24-.02-.32-.12-.1-.15.01-.37.1-.5l2.1-2.77c.15-.22.35-.44.61-.45zm-22.26 8.5a3.4 3.4 0 00-2.17 1.24 3.4 3.4 0 00-.5 3.26 14.3 14.3 0 01.34 8.78c-.1.33-.19.73.02 1.01.34.43 1.01.13 1.45-.19 2.95-2.17 5.91-4.37 8.88-6.54.45-.3.84-.66 1.16-1.09.3-.44.41-1.06.15-1.52a2.17 2.17 0 00-.7-.7 44.59 44.59 0 00-5.62-3.45 6.56 6.56 0 00-2.16-.8 2.97 2.97 0 00-.84 0zm.98 3.63c1.4.68 2.8 1.45 4.14 2.28.3.2.64.63.37.86a32.07 32.07 0 01-4.09 2.95c-.1-.02-.13-.15-.14-.23l-.48-5.56c0-.13.07-.36.2-.3zm-33.84 4.65c-1.12-.05-2.13.83-2.65 1.85-.5 1.02-.65 2.17-.92 3.27a13.93 13.93 0 01-1.76 4.1c-.42.65-.85 1.5-.37 2.06.33.37.89.36 1.4.33 3.5-.27 6.98-.76 10.43-1.5 1.03-.22 2.1-.47 3.11-.27.78.15 1.56-.42 1.89-1.15a5 5 0 00.27-2.35c-.28.03-.58.04-.87.08a30.9 30.9 0 00-9.24-6.06c-.41-.16-.84-.33-1.3-.36zm-.23 3.21a.28.28 0 01.2 0 22.3 22.3 0 015.69 3.45c.03.02.08.06.1.12.04.13-.14.26-.3.3-1.09.34-2.23.56-3.35.7-.39.04-.77.05-1.15.09l-2.34.15c-.23 0-.5-.03-.55-.23-.03-.08.01-.17.03-.25l1.24-3.77c.08-.23.23-.5.43-.56zm19.23 15.39a2.7 2.7 0 00-1.9 1c-.6.8-.9 1.77-.88 2.77-.04 2.65-.1 5.3-.13 7.95 0 .23 0 .48.16.6.24.26.65.13.98-.02 2.78-1.26 5.75-1.96 8.71-2.7.52-.1 1.02-.28 1.47-.55.97-.7 1.24-2.04.62-3.07-.33-.51-.31-1.25-.8-1.6-2.35-1.7-4.76-3.41-7.52-4.29a2.2 2.2 0 00-.72-.09zm.28 3.32c.3-.09.58.06.84.2l1.88.98c1.1.58 2.26 1.2 2.88 2.28-1.73.57-3.5 1.05-5.28 1.43-.15.02-.35.05-.5-.03-.09-.1-.1-.26-.1-.4-.06-1.48.04-3 .28-4.46z'  stroke-width='1' stroke='none' fill='hsla(0, 0%, 0%, 0.04)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
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
