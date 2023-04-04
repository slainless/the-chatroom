import 'modern-normalize/modern-normalize.css'
import { Outlet } from 'react-router-dom'

import '@atlaskit/css-reset/dist/bundle.css'

import BaseLayout from '#Layouts/Base'

export default function App() {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  )
}
