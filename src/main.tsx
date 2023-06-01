import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router.tsx'
import Nav from './component/Nav.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="min-height-200 bg-primary position-absolute w-100"></div>
    <Nav></Nav>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
