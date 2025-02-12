import React from 'react'
import OfferRow from './OfferRow'
import support from "../../assets/images/services/support.jpg"
import knowledge from "../../assets/images/services/knowledge.jpeg"
import client_focus from "../../assets/images/services/client_focused.jpg"
import pricing from "../../assets/images/services/greyphin-transparent-pricing.webp"

const offers = [{
        title: "Comprehensive Business Support",
        text: "Whether you're looking for day-to-day bookkeeping, tax planning, or long-term financial strategy, we provide a full range of services to meet your business's needs.",
        bg: support,
        orientation:"right"
        }, {
        title: "Expert Knowledge of UK Accounting Standards",
        text: "Our team of certified accountants is highly knowledgeable in UK tax law, ensuring you remain compliant while maximizing your financial potential.",
        bg: knowledge,
        orientation:"left"

    },
    {
        title: "Client-Focused Approach",
        text: "We build long-term relationships with our clients, understanding your business inside out to provide the most effective and personalized accounting solutions",
        bg: client_focus,
        orientation:"right"

        
    },
    {
        title: "Transparent Pricing",
        text: "No hidden fees or surprise costs—our pricing structure is clear, competitive, and tailored to the services you need.",
        bg: pricing,
        orientation:"left"


    }]

const Offers = () => {
  return (
    <section className='px-4'> 
        <div className='max-w-7xl m-auto'>


        {offers.map(offer  => (
            <OfferRow key={offer.title} title={offer.title} text={offer.text} background={offer.bg} pos={offer.orientation}/>
        ))}
        </div>

        
  </section>

  )
}

export default Offers