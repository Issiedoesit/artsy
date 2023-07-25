import React from 'react'
import GirlCreator from './../../../assets/images/creators/girl-top-creator.png'
import GuyCreatorSmall from './../../../assets/images/creators/guy-top-creator-small.png'
import GuyCreatorLarge from './../../../assets/images/creators/guy-top-creator-large.png'



export default function TopCreators(){
    return(
       <section className='px-4 lg:px-28 py-16 bg-lightPurple1x relative h-screen'>
          <div className='lg:flex flex-row items-start justify-between'>
            <div className='space-y-4'>
                <h1 className='text-2xl lg:text-5xl font-clash-semibold'>TOP CREATORS OF</h1>
                <h1 className='text-2xl lg:text-5xl font-clash-semibold'>THE WEEK</h1>
            </div>
            <div className='font-clash-regular text-3xl text-grey1x pb-9'>
                <div className='px-8 py-2'><h1>Editorials</h1></div>
                <div className='px-8 py-2'><h1>Fashion</h1></div>
                <div className='px-8 py-2'><h1>Lifestyle</h1></div>
                <div className='px-8 py-2'><h1>Blueprint</h1></div>
            </div>
          </div>
          <h1 className='text-black/60 text-3xl font-clash-extralight w-eightyFivePercent pb-4'>
            “Everything always looked better in black and white. Everything always  as if it were the first time; 
            there's always more people in a black and white photograph. It just makes it seem that there were more 
            people at a gig, more people at a football match, than with colour photography. Everything looks more exciting.”– 
            Jack Lowden
          </h1>
          <h1 className='font-clash-bold text-9xl text-right line-through py-10'>1985</h1>
          <div className='absolute bg-black/5 w-fiftyPercent h-ninetyPercent -bottom-28 left-thirtyPercent'>
                <div className='h-full relative'>
                    <img src={GirlCreator} alt="GirlCreator" className='h-full absolute bottom-0 creator-img ci-one'/>
                    <img src={GuyCreatorSmall} alt="GuyCreatorSmall" className='h-full absolute bottom-0 creator-img ci-two'/>
                    <img src={GuyCreatorLarge} alt="GuyCreatorLarge" className='h-full absolute bottom-0 creator-img ci-three'/>
                </div>
          </div>
       </section> 
    )
}