
import AppButton from "../button/Button"
import "./style.scss"

const Hero = () => {
  return (
<div className='h-[600px] hero flex justify-left px-4 flex-col items-center hero'>
  <div className="grid md:grid-cols-2 m-auto max-w-7xl">

   <div className="max-w-lg text-justify">

   
    <p className='bg-gray text-2xl text-left max-w-6xl mt-20 md:mt-16 md:text-4xl font-bold  text-gray-200 '>
      Get a reliable supply of cooking gas for your household today.
    </p>
    <p className='text-gray-200 text-left  max-w-6xl text-xl font-semibold md:text-3xl mt-10 '>
      Safe, Fast, and Efficient
    </p>
    <div className="my-4">
      <input className="py-6 px-4 text-2xl bg-gray-200/10 border border-white rounded-2xl text-white w-full" placeholder="Enter Number" />
      <AppButton className={"h-80 text"}>
        Buy Gas
      </AppButton>
    </div>
    </div>
  </div>

</div>  )
}

export default Hero