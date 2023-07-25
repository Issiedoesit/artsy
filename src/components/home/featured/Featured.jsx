import { motion } from 'framer-motion'
import React from 'react'
import FeaturedCards from '../../../widgets/cards/FeaturedCard'
import featuredData from '../../../data/featured/featuredData'





export default function Featured(){
    // const cardVariants : Variants = {
    //     offscreen: {
    //       y: 150,
    //       opacity:0,
    //     },
    //     onscreen: {
    //       y: 0,
    //       opacity:1,
    //       transition: {
    //         type: "spring",
    //         bounce: 0.4,
    //         duration:2,
    //         delayChildren: 0.5,
    //         staggerDirection: -1
    //       }
    //     }
    //   };
    

    const featuredDataSet = featuredData.map((data)=>{
        return <FeaturedCards key={data.id} title={data.title} description={data.description} creator_no={data.no} img={data.img}/>
    })

    return(
        <motion.div initial={{translateY:'200px', opacity:0}} viewport={{ once: true }} whileInView={{translateY:'0px', opacity:1}} transition={{duration:2, type:'spring', bounce: 0.4, delayChildren: 0.5, staggerDirection: -1}} className='py-40 px-4 lg:px-28'>
            <h1 className='text-4xl py-10 font-satoshi-medium'>Featured products</h1>
            {featuredDataSet}
        </motion.div>
    )
}