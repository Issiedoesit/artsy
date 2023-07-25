import React from 'react'


export default function Newsletter(){
    return(
        <section className='px-14 pt-40 pb-60px md:text-center text-grey1x'>
            <div className='space-y-5  md:px-10 text-2xl md:text-3xl py-60px md:border border-grey1x'>
            <h1 className="baskervville-400 text-5xl">NewsLetter</h1>
            <h2 className='font-satoshi-regular '>
                <span className='hidden md:block'>Subscribe to get daily updates on new drops & exciting deals</span> 
                <span className='block md:hidden'>SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTERS</span> 
                </h2>
            <div className='baskervville-400 py-5 flex flex-col md:flex-row md:items-center gap-6 md:gap-5 justify-center'>
                <input type="email" name="email" id="email" className='py-5 border border-grey1x pl-10 pr-6' placeholder='Enter your Email'/>
                <button type="submit" className='py-5 px-10 w-fit bg-grey3x hover:bg-lightGrey1x hover:text-grey1x transition-colors duration-500 border border-grey1x text-white'>Subscribe</button>
            </div>
        </div>
        </section>
    )
}