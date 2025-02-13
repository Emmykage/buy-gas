import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'

function App() {

  
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="/auth" element={<Login/>}/>

        </Route>
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App
