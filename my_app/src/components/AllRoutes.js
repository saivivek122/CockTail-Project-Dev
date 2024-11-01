import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import NewsSettler from '../pages/NewsSettler'
import SinglePage from '../pages/SinglePage'
import Cart from '../pages/Cart'

const AllRoutes = () => {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/newssettler' element={<NewsSettler />} />
      <Route path='single/:id' element={<SinglePage />}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
     
    </Routes>

  )
}

export default AllRoutes
