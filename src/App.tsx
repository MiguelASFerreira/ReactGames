import { useState } from 'react'
import { Outlet } from "react-router-dom"

import Navbar from './components/navbar'
import Footer from './components/footer'

import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
