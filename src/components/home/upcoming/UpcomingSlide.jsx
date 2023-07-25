import React from 'react'



export default function UpcomingSlide(props){
    return(
        <section key={props.key} className='show-slide py-20 lg:py-0 w-full relative z-40 lg:absolute top-fiftyPercent lg:-translate-y-twentyPercent first-of-type:block hidden'>
            <div className='hidden w-full h-fiftyPercent'>
                
            </div>
            <div className='text-white w-full lg:pl-12'>
                <div className='flex flex-row gap-10 lg:pl-12'>
                    <div className='h-4 w-4 p-2 bg-white rounded-fiftyPercent'></div>
                    <h1 className='bellefair text-2xl lg:text-4xl max-w-lg leading-10 lg:leading-[60px] -translate-y-4'>{props.title}</h1>
                </div>
               <div className='flex flex-row items-center gap-8'>
                    <h1 className='text-5xl lg:text-7xl'>{props.id}</h1>
                    <div className='flex flex-row items-center gap-2 poppins-400'>
                        <h1>START ON: </h1>
                        <h1>{props.startTime}.</h1>
                        <h1>{props.startDay}</h1>
                    </div>
               </div>
               <div className='flex flex-row flex-wrap lg:flex-nowrap items-center lg:pl-28 lg:pr-10 leading-8 font-satoshi-medium w-full justify-between'>
                   <h1 className='lg:max-w-3xl w-full lg:w-sixtyPercent'>{props.description}</h1>
                   <div className='w-full lg:w-fortyPercent justify-between flex flex-row items-center pt-10 lg:pt-0'>
                       <a href={props.link} className='text-2xl font-satoshi-regular underline underline-offset-4'>See more</a>
                       <a href='#' className='text-2xl font-satoshi-regular border border-white p-3 rounded-ten'>Set a reminder</a>
                   </div>
               </div>
            </div>
        </section>
    )
}