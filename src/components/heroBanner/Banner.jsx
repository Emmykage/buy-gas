import './slider.scss'

const Banner = ({header}) => {

    const bannerTitle = (title) => {
        switch (title) {
            case "service":
                return "Our Services"                
            case "contact":
                return "Contact Us"
            case "about": 
                return "About Us"    
            case "appointment": 
                return "Book APpointment" 
            case "bookkeeping":
                return "Bookkeeping & Payroll"
            case "business-consultancy":
                return "Business Consultancy"
            case "financial-report":
                return "Financial Reporting"
            case "tax-planning":
            return "Tax Planning"
            case "blog":
                return "ValentPhama Blog"
            default:
                return title
        }
    }
  return (
    <div className={`${header} h-72 mt-28 flex items-center justify-center  service-banner w-full`}>
        <div className='border-gray-400 bg-gray-700/80 px-10 py-3'>
            <h3 className='text-lg md:text-3xl text-alt font-semibold'>{bannerTitle(header)}</h3>
        </div>
    </div>
  )
}


// Banner.propTypes = {
//     header: PropTypes.string
// }

export default Banner