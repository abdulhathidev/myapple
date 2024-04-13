import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './features/home/Home'
import Registration from './features/registration/Registration'
import Navbar from './features/navigation/Navbar'

const AppRoutes = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default AppRoutes
