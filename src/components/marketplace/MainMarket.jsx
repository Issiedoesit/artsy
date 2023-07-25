import {React} from 'react'
import MarketCard from '../../reuseables/cards/MarketCard'
import marketData from '../../data/market/marketData'

export default function MainMarket({resultCount, query}){
   
    const marketDataSet = marketData.map((data, index)=>{
        return <MarketCard id={data.id} image={data.image} name={data.name} price={data.price} key={index}/>
    })
  return (
    <div id="product_wrap" className='md:w-eightyPercent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-4'>
            {marketDataSet}
            {(resultCount == 0 && query) && <div className='py-20 w-full col-span-1 md:col-span-2 lg:col-span-3 flex justify-center items-center text-lg'>Your search <span className={`font-bold`}>"{query}"</span> returned <span className={`font-bold`}>"{resultCount}"</span> result(s)</div>}
            {((resultCount > 0 && query) || !query) && <div className='py-20 w-full col-span-1 md:col-span-2 lg:col-span-3 flex justify-center items-center'>
                <button type='button' className='w-fit hover:bg-grey1x hover:text-white transition-colors duration-500  rounded-ten border font-satoshi-medium text-grey1x text-2xl border-grey1x py-3 px-5'>See more</button>
            </div>}
    </div>
  )
}

