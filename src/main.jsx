
import ReactDOM from 'react-dom/client'

import './index.css'
import Home from './pages/Home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Blogs from './pages/Blogs.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import MainLayout from './layouts/MainLayout.jsx'




const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>,
        loader: ()=> fetch('https://dev.to/api/articles?per_page=30&top=7')
      },
      {
        path:'/bookmarks',
        element:<Bookmarks></Bookmarks>
      },
    ]
  },

])






ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}/>
  </>,
)
