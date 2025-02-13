import { NavLink } from 'react-router-dom'
import AppButton from '../button/Button'
import "./style.scss"
// eslint-disable-next-line react/prop-types
const CTA = ({title, text,  classPro, buttonText , link = "/contact-us"}) => {
  return (

    <section className='CAT bg-gray-100 py-20 px-5'>
        <div className={`py-16 max-w-6xl text-alt  m-auto ${classPro}`}>
          {title &&  <h4 className='text-xl font-medium md:text-3xl text-center'>{title}</h4> }
         
            <p className='text-center text-xl font-medium text-gray-600'>{text || "MAke an Order for our Gas delivery"}</p>
            <AppButton
            style={{
                width: "max",
                // marginLeft: "auto"
            }}>
            {buttonText}
            </AppButton>
            <NavLink to={link} className="my-5 font-semibold block m-auto w-max px-10 py-4 border-[3px] rounded-3xl border-alt hover:text-alt">{buttonText || "Contact Us"}</NavLink>

            
        </div>
    </section>

  )
}

export default CTA