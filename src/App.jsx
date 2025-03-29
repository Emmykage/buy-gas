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
import AdminOrder from './pages/admin/orders/Order'
import AdminUser from './pages/admin/users/Users'
import useScrollTop from './hooks/useScrollTop'
import { AppToast } from './components/toast'
import Loader from './components/loader/Loader'
import { useSelector } from 'react-redux'
import ShowOrder from './pages/admin/orders/Shhow'
import AdminAgents from './pages/admin/agents/Agents'


function App() {
  useScrollTop()
  const {isLoading}= useSelector(state => state.app)

  
  return (
    <>
    {isLoading && 
    <Loader/>
    }
     <AppToast/>
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
        <Route path='orders/:id' element={<ShowOrder/>}/>
        <Route path='users' element={<AdminUser/>}/>
        <Route path='agents' element={<AdminAgents/>}/>

        </Route>

        <Route path='/auth/admin-login' element={<AdminLogin/>}/>

      </Routes>
      
    </>
  )
}

export default App
