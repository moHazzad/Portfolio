import { useState } from 'react'
import './App.css'
import NavBar from './Components/Pages/SharedPage/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Pages/SharedPage/Footer'

function App() {
  

  return (
    <>
      <div>
      <NavBar />
      <Outlet />
      <Footer />
      </div>
    </>
  )
}

export default App
