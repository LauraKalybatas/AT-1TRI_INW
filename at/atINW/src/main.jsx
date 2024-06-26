import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Contato from './App3'
import Sobre from './App2'
import App from './App'
import MainContent from './componentes/home/MainContent'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {index:true, element: <MainContent/>},
      {
        path: 'sobre',
        element: <Sobre/>
      },
      {
        path: 'contato',
        element: <Contato/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
)
