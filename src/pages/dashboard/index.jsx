import React, { useEffect } from 'react'
import Navigation from './components/navigation/Navigation'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import "./style.scss"
import CustomizedSteppers from '../../components/stepper/Stepper'
import { userProfile } from '../../redux/actions/auth'
const Dashboard = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const dispatch = useDispatch()
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);
    const navigate = useNavigate()

    
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
 
    const {user} = useSelector(state => state.auth)

    useEffect(() => {
      dispatch(userProfile())
    }, [])

    console.log(user.phone)
  return (
    <div className='container m-auto  min-h-screen'>
        <Navigation/> 
            <div className='px-4'>

            <div>

                
            <div className='mt-10 hidden md:hidden'>
            <h3 className='md:text-3xl text-xl font-semibold flex justify-between'>
                <span>  Hello,</span>
               {user?.phone}</h3>
        </div>

            </div>


            <div className='py-0'>  

                <div className='max-w-7xl m-auto pt-10 bg--50'>
               
                <CustomizedSteppers 
                 activeStep={activeStep}
                 setActiveStep={setActiveStep}
                 isLastStep={isLastStep}
                 setIsLastStep={setIsLastStep}
                 isFirstStep={isFirstStep}
                 setIsFirstStep={setIsFirstStep}
                 />


                    <Outlet context={[handleNext, handlePrev]}/>
                </div>

              
            </div>

      
            </div>

    </div>
  )
}

export default Dashboard