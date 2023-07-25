import React from 'react'

export default function MarketCard(props){
  return (
    <section id={props.id} className="market-card col-span-1 text-grey1x bg-white rounded-fifteen px-3 py-4 shadow-md">
        <div>
            <img src={props.image} alt={props.name} />
        </div>
        <div className='space-y-4 px-2 py-4'>
            <h1 className='font-satoshi-regular text-xl'>{props.name}</h1>
            <h1 className='font-satoshi-bold text-2xl'>{props.price}</h1>
        </div>
    </section>
  )
}

