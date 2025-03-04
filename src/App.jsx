import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Login from './components/login/Login'
import Dashboard from './pages/dashboard'
import PaymentForm from './pages/dashboard/payments/PaymentForm'
import PaymentDetails from './pages/dashboard/paymentDetails/PaymentDetails'
import ConfirmOrder from './pages/dashboard/confirmOrder/ConfirmOrder'
import History from './pages/dashboard/history/History'
import Contact from './pages/dashboard/contact'
import AdminDashboard from './layouts/AdminDashboard'
import AdminHome from './pages/admin/Home'
import AdminLogin from './pages/auth/AdminLogin'
import MainDashboard from './layouts/MainDashboard'
import AdminOrder from './pages/admin/Order'
import AdminUser from './pages/admin/Users'
import useScrollTop from './hooks/useScrollTop'


function App() {
  useScrollTop()

  
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="/auth" element={<Login/>}/>

        </Route>

        <Route path='/dashboard' element={<> <MainDashboard/></>}>        
          <Route path='' element={<Dashboard/>}>
            <Route path='payment-form' element={<PaymentForm/>}/>
            <Route path='payment-details' element={<PaymentDetails/>}/>
            <Route path='confirm-payments' element={<ConfirmOrder/>}/>
     
          </Route>
            <Route path='contact-us' element={<Contact/>}/>
            <Route path='history' element={<History/>}/>

          </Route>
          
        

        <Route path='/admin' element={<AdminDashboard/>}>
        <Route path='home' element={<AdminHome/>}/>
        <Route path='orders' element={<AdminOrder/>}/>
        <Route path='users' element={<AdminUser/>}/>

        </Route>

        <Route path='/auth/admin-login' element={<AdminLogin/>}/>

      </Routes>
      
    </>
  )
}

export default App
