import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import OrdersList from './components/OrdersList'
import Dashboard from './components/OrdersList'
import './index.css'

const router = createBrowserRouter([{
    path: "/",
    element: <App />,
  },
  {
    path: "/orders",
    element: <OrdersList/>,
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
