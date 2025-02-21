import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import Dashboard from './pages/dashboard'
import PaymentForm from './pages/dashboard/payments/PaymentForm'
import PaymentDetails from './pages/dashboard/paymentDetails/PaymentDetails'
import ConfirmOrder from './pages/dashboard/confirmOrder/ConfirmOrder'
import History from './pages/dashboard/history/History'


function App() {

  
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="/auth" element={<Login/>}/>

        </Route>

        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/dashboard/history' element={<History/>}/>
        <Route path='/dashboard/payment-form' element={<PaymentForm/>}/>
        <Route path='/dashboard/payment-details' element={<PaymentDetails/>}/>
        <Route path='/dashboard/confirm-payments' element={<ConfirmOrder/>}/>

      </Routes>
      <Footer/>
      
    </>
  )
}

export default App
