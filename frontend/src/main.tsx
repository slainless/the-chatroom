import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'reflect-metadata'

import GlobalTheme from '#Components/Effect/GlobalTheme'
import UserManager from '#Components/Effect/UserManager'
import '#Functions/ws'
import Room from '#Layouts/Room'

import App from './App'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: 'room/:roomId', element: <Room /> }],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserManager />
    <GlobalTheme />
    <RouterProvider router={routes} />
  </React.StrictMode>
)
