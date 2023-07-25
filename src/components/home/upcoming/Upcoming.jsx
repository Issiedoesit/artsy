import { motion } from 'framer-motion'
import {React, useState, useEffect} from 'react'
import upcoming_img from './../../../assets/images/upcoming/upcoming-bg.png'
import upcomingData from '../../../data/upcoming/UpcomingData';
import UpcomingSlide from './upcomingSlide';
// import $ from 'jquery';



const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;


export function MakeControls(props){
    
    return(
       <div id={props.index} className='control-dash bg-transparent w-8 h-tenPixel first-of-type:rounded-fifty first-of-type:bg-white'>
       </div>
    )
}

export default function Upcoming(){
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);

    const upcomingDataSet = upcomingData.map((data)=>{
        return <UpcomingSlide title={data.title} key={data.key} description={data.description} link={data.link} id={data.id} startDay={data.startDay} startTime={data.startTime}/>
    })
    
    const controls = upcomingData.map((index)=>{
        return <MakeControls id={index}/>
    })

   const [slideIndex, setSlideIndex] = useState(1)
     

    function myClick(n){
        showSlides(setSlideIndex(prevSlideIndex => prevSlideIndex += n))
    }
    // function myCurrent(n){
    //     showSlides(setSlideIndex(n))
    // }
    
    let slides = document.querySelectorAll('.show-slide')
    let control = document.querySelectorAll('.control-dash')
    
    
    
    function showSlides(){
        let set = (upcomingData.length)
        let index = slideIndex
        if(slideIndex < 1){setSlideIndex(prevSlideIndex => prevSlideIndex = set)}
        if(slideIndex > (set - 1)){setSlideIndex(1)}
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none'
        }
        slides[index-1].style.display = 'block'
        for (let i = 0; i < control.length; i++) {
            control[i].style.backgroundColor = 'transparent'
            control[i].style.borderRadius = '0px'
        }
        control[index-1].style.backgroundColor = 'white'
        control[index-1].style.borderRadius = '50px'
    }

    
    



    return(
        <motion.section initial={false} animate={isLoaded && isInView ? { WebkitMaskImage: visibleMask, maskImage: visibleMask } : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }} transition={{ duration: 1 }} viewport={{ once: true }} onViewportEnter={() => setIsInView(true)} className='lg:min-h-screen slide-wrap bg-gradient-to-r from-green1x via-green2x to-peach1x w-full py-6 px-4 lg:px-28'>
            <h1 className='hidden lg:block text-white text-3xl font-satoshi-medium border-b pb-2 w-fit '>See Upcoming Auctions and Exhibitions</h1>
            <section className='pt-5 relative'>
                <img className='absolute lg:relative h-full z-10 lg:z-auto' src={upcoming_img} alt="" onLoad={() => setIsLoaded(true)} />
                {upcomingDataSet}
            </section>
            <section className='flex items-center justify-between w-full py-5'>
                <div className='hidden lg:flex flex-row items-center bg-lightGrey1x rounded-fifty w-fit'>
                    {controls}
                </div>
                <div className='hidden lg:flex flex-row items-center gap-8'>
                    <button onClick={() => myClick(-1)} className='upcoming-btn w-60px h-60px bg-gradient-to-r from-green2x to-peach1x rounded-fiftyPercent flex items-center justify-center'>
                        <p className='hidden'>Previous</p>
                        <svg width="10" height="14" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.94469 5.85521L6.79102 2.00888L5.69229 0.910156L0.747236 5.85521L5.69229 10.8003L6.79102 9.70153L2.94469 5.85521Z" fill="white"/>
                        </svg>
                    </button>
                    <p>{slideIndex}</p>
                    <button onClick={() => myClick(+1)} className='upcoming-btn w-60px h-60px bg-gradient-to-r from-green2x to-peach1x rounded-fiftyPercent flex items-center justify-center'>
                        <p className='hidden'>Next</p>
                        <svg className='rotate-180' width="10" height="14" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.94469 5.85521L6.79102 2.00888L5.69229 0.910156L0.747236 5.85521L5.69229 10.8003L6.79102 9.70153L2.94469 5.85521Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </section>
        </motion.section>
    )
}