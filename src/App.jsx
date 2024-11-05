import React, { useEffect } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Packages from './pages/Packages'
import Contact from './pages/Contact'
import { useDispatch } from 'react-redux'
import { getAlldestData, getAllPackData, getAllUserData } from './api/request'
import DestinationDetail from './pages/detail/DestinationDetail'
import PackagesDetail from './pages/detail/PackagesDetail'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAlldestData('https://travel-data-base.onrender.com/destinations'))
    dispatch(getAllPackData('https://travel-data-base.onrender.com/offers'))
    dispatch(getAllUserData('https://travel-data-base.onrender.com/users'))
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='destinations' element={<Destinations />} />
        <Route path='/destination/:slug' element={<DestinationDetail />} />
        <Route path='packages' element={<Packages />} />
        <Route path='/packages/:slug' element={<PackagesDetail />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
