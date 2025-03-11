import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './component/home/Home.jsx'
import Photos from './component/photos/Photos.jsx'
import Users from './component/Users/Users.jsx'
import Funs from './fun/Funs.jsx'
import Fun1 from './fun/fun-post/Fun1.jsx'


const route = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
   children:[
    {
      path: '/photo',
      element: <Photos></Photos>
    },
    {
      path:'/about',
      element:<p>I am a leh=jy Developer </p>
  
    },
    {
      path:'/users',
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/users') ,
      element:<Users></Users>
  
    },
   ]
  },
  
  {
    path:'fun',
    element: <Funs></Funs>,
    children:[
      {
        path: '/fun1',
        element: <Fun1></Fun1>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} ></RouterProvider>
  </StrictMode>,
)
