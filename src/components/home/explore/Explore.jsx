import React from 'react'
import exploreData from '../../../data/explore/exploreData'
import ExploreCard from '../../../widgets/cards/ExploreCard'




export default function Explore(){

    const exploreDataSet = exploreData.map((data)=>{
        return <ExploreCard key={data.id} title={data.title} link={data.link} />
    })
    return(
        <section className='border-y-0.5 border-grey1x divide-y-0.5 divide-grey1x my-20 lg:my-40'>
            {exploreDataSet}
        </section>
    )
}