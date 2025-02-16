import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import Dashboard from './pages/dashboard'

function App() {

  
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="/auth" element={<Login/>}/>

        </Route>

        <Route path='/dashboard' element={<Dashboard/>}>

        </Route>
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App
