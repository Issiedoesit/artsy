import { motion } from 'framer-motion'
import React from 'react'
import stacked_1 from '../../assets/images/featured/stacked1.png'
import stacked_2 from '../../assets/images/featured/stacked2.png'
import stacked_3 from '../../assets/images/featured/stacked3.png'
import stacked_4 from '../../assets/images/featured/stacked4.png'
import stacked_5 from '../../assets/images/featured/stacked5.png'


export default function FeaturedCards(props){
    return(
        <section key={props.key} className="py-14 flex flex-col lg:even:flex-row lg:odd:flex-row-reverse gap-10 border-t-0.5 border-t-grey1x">
            <div className='group cursor-pointer w-full lg:w-fiftyPercent h-fit relative'>
                <img src={props.img} alt={props.alt} />
                <motion.div  initial={{ opacity: 0, translateY: '10%' }} whileInView={{ opacity: 1, translateY: '0%'}} transition={{duration:0.8, type:'spring'}} className='pointer-events-none bg-black/60 flex lg:hidden lg:group-hover:flex flex-row items-center justify-center absolute h-full w-full top-0 left-0 '>
                    <div className='space-y-10'>
                        <h1 className='stix-font-700 text-3xl text-white text-center'>{props.title}</h1>
                        <a href='#' className='h-76px w-76px flex items-center justify-center rounded-fiftyPercent border-0.5 border-white float-right'>
                            <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13C0 12.617 0.1505 12.2496 0.418392 11.9788C0.686284 11.7079 1.04962 11.5558 1.42848 11.5558H35.1206L26.1298 2.46859C25.8615 2.1974 25.7108 1.82959 25.7108 1.44607C25.7108 1.06255 25.8615 0.694733 26.1298 0.423543C26.398 0.152353 26.7618 9.03605e-09 27.1411 0C27.5205 -9.03605e-09 27.8843 0.152353 28.1525 0.423543L39.5803 11.9775C39.7134 12.1116 39.8189 12.271 39.8909 12.4465C39.9629 12.6219 40 12.81 40 13C40 13.19 39.9629 13.3781 39.8909 13.5535C39.8189 13.729 39.7134 13.8884 39.5803 14.0225L28.1525 25.5765C27.8843 25.8476 27.5205 26 27.1411 26C26.7618 26 26.398 25.8476 26.1298 25.5765C25.8615 25.3053 25.7108 24.9375 25.7108 24.5539C25.7108 24.1704 25.8615 23.8026 26.1298 23.5314L35.1206 14.4442H1.42848C1.04962 14.4442 0.686284 14.2921 0.418392 14.0212C0.1505 13.7504 0 13.383 0 13Z" fill="#FFFFFF"/>
                            </svg>
                        </a>
                    </div>
                </motion.div>
            </div>
            <div className='space-y-9 w-full lg:w-fiftyPercent'>
                <h1 className='text-3xl font-bold stix-font-700 hidden lg:block '>{props.title}</h1>
                <h1 className='text-2xl font-satoshi-regular'>{props.description}</h1>
                <div className='flex flex-row items-center justify-between'>
                    <div className='relative'>
                        <div className='flex flex-row'>
                            <img src={stacked_1} alt="creator"  className='w-12 h-12 absolute top-fiftyPercent -translate-y-fiftyPercent left-0'/>
                            <img src={stacked_2} alt="creator"  className='w-12 h-12 absolute top-fiftyPercent -translate-y-fiftyPercent left-8'/>
                            <img src={stacked_3} alt="creator"  className='w-12 h-12 absolute top-fiftyPercent -translate-y-fiftyPercent left-16'/>
                            <img src={stacked_4} alt="creator"  className='w-12 h-12 absolute top-fiftyPercent -translate-y-fiftyPercent left-24'/>
                            <img src={stacked_5} alt="creator"  className='w-12 h-12 absolute top-fiftyPercent -translate-y-fiftyPercent left-32'/>
                        </div>
                        <h1 className='text-2xl font-satoshi-medium pl-48'>{props.creator_no} major creators</h1>
                    </div>
                    <a href='#' className='h-76px w-76px flex items-center justify-center rounded-fiftyPercent border-0.5 border-grey1x'>
                        <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13C0 12.617 0.1505 12.2496 0.418392 11.9788C0.686284 11.7079 1.04962 11.5558 1.42848 11.5558H35.1206L26.1298 2.46859C25.8615 2.1974 25.7108 1.82959 25.7108 1.44607C25.7108 1.06255 25.8615 0.694733 26.1298 0.423543C26.398 0.152353 26.7618 9.03605e-09 27.1411 0C27.5205 -9.03605e-09 27.8843 0.152353 28.1525 0.423543L39.5803 11.9775C39.7134 12.1116 39.8189 12.271 39.8909 12.4465C39.9629 12.6219 40 12.81 40 13C40 13.19 39.9629 13.3781 39.8909 13.5535C39.8189 13.729 39.7134 13.8884 39.5803 14.0225L28.1525 25.5765C27.8843 25.8476 27.5205 26 27.1411 26C26.7618 26 26.398 25.8476 26.1298 25.5765C25.8615 25.3053 25.7108 24.9375 25.7108 24.5539C25.7108 24.1704 25.8615 23.8026 26.1298 23.5314L35.1206 14.4442H1.42848C1.04962 14.4442 0.686284 14.2921 0.418392 14.0212C0.1505 13.7504 0 13.383 0 13Z" fill="#616161"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}