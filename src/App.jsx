import { } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import About from './Component/About/About'

import {RouterProvider,createBrowserRouter  } from 'react-router-dom'
import Layout from './Component/Layaut/Layout'
import NotFound from './Component/Notfound/NotFound'
import Portofolio from './Component/Portofolio/Portofolio'
import Contact from './Component/Contact/Contact'
import Home from './Component/Home/Home'
Home
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portofolio', element: <Portofolio /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
function App() {

  return <RouterProvider router={router}/>
}

export default App
