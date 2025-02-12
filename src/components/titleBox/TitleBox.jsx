import React from 'react'

const TitleBox = ({title}) => {
  return (
    <h3 className='m-auto font-semibold text-xl md:text-3xl px-20 py-5 border-4 border-alt text-center md:w-max'>
        {title}
        
    </h3>
  )
}

export default TitleBox