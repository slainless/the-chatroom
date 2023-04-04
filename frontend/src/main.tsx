import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

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
    <RouterProvider router={routes} />
  </React.StrictMode>
)
