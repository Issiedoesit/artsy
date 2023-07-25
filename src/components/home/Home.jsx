import React from 'react'
import Newsletter from '../newsletter/Newsletter'
import Carousel from './carousel/Carousel'
import Explore from './explore/Explore'
import Featured from './featured/Featured'
import Header from './Header'
import TopCreators from './topCreators/TopCreators'
import Upcoming from './upcoming/Upcoming'
import Footer from './../../components/footer/Footer';










export default function Home(){
    return(
       <div>
            <Header />
            <Carousel />
            <Featured />
            <Upcoming />
            <Explore />
            <TopCreators />
            <Newsletter />
            <Footer />
       </div>
    )
}