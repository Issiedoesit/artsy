import { motion } from 'framer-motion'
import React from 'react'



export default function Header(){
    return(
        <header className='py-5'>
            <motion.div initial={{ opacity: 0, translateY: '1000px' }} animate={{ opacity: 1, translateY: '0px' }} transition={{ duration: 2}} className='px-tenPercent text-center space-y-8'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-clash-semibold'>Photography is poetry &</h1>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-clash-semibold'>beautiful untold stories</h1>
            </motion.div>
            <motion.div initial={{ opacity: 0, translateX: '1000px' }} animate={{ opacity: 1, translateX: '0px' }} transition={{ duration: 2}} className='pt-12 pb-20 px-tenPercent text-center space-y-2'>
                <p className='font-satoshi-medium text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl'>Flip through more than 10,000 vintage shots, old photograghs, historic</p>
                <p className='font-satoshi-medium text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl'>images and captures seamlessly in one place. Register to get top access.</p>
            </motion.div>
        </header>
    )
}