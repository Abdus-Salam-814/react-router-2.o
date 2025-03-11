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
import UserDetails from './userDeatails/UserDetails.jsx'
import ErrorPage from './ErrorPage/ErrorPage.jsx'
import Form from './Form/Form.jsx'
import StateForm from './StateForm/StateForm.jsx'


const route = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
   children:[
    {
      path: '/photo',
      element: <Photos></Photos>
      
    },
    {
      path: '/form',
      element: <Form></Form>
      
    },
    {
      path: '/stateForm',
      element: <StateForm></StateForm>
      
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
    {
      path: 'user/:userId',
      loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      element: <UserDetails></UserDetails>
    }
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
