import { NavLink } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const CTA = ({title, text,  classPro, buttonText , link = "/contact-us"}) => {
  return (

    <section className=' bg-gray-100 py-20 px-5'>
        <div className={`py-16 max-w-6xl m-auto ${classPro}`}>
          {title &&  <h4 className='text-xl font-medium text-center'>{title}</h4> }
         
            <p className='text-center text-xl font-medium text-gray-600'>{text || "To learn more about how our Products and Services and how they can benefit your business."}</p>
            <NavLink to={link} className="my-5 font-semibold block m-auto w-max px-10 py-4 border-[3px] rounded-3xl border-alt hover:text-alt">{buttonText || "Contact Us"}</NavLink>

            
        </div>
    </section>

  )
}

export default CTA