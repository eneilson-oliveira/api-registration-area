import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
//páginas
import Home from './routes/Home'
import NewPost from './routes/NewPost'
import Register from './routes/Register'
const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },

      { 
        path: "/cadastro",
        element:<Register/>,
      },
      {
        path:"/new",
        element:<NewPost/>,
      },
 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
