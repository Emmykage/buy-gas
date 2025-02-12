import React from 'react'

const OfferRow = ({title, text, background, pos}) => {

    return (
    <div className="grid md:grid-cols-2 gap-4 mb-4"> 
                
        
        <div className={`${pos== "right" ? "order-1" : "order-2"} ${pos} overflow-hidden p-0.5 border-gray-600`}>
            <img src={background} alt="" className="w-full border-2 border-gray-200 p-1 rounded-2xl"/>

        </div>
        <div className={`${pos== "right" ? "order-2" : "order-1"} `}>
            <h2 className="text-4xl font-semibold my-5">
                {title}
            </h2>

        <p>
            {text}                
        </p>
        </div>
    </div>
  )
}

export default OfferRow