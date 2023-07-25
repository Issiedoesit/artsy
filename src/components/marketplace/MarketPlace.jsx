import {React, useMemo, useState, useEffect} from 'react'
import SideBar from './SideBar'
import SearchBar from './SearchBar'
import MainMarket from './MainMarket'
import $ from 'jquery'


export default function Product(){
    const [query, setQuery] = useState('')
    const [resultCount, setResultCount] = useState(0)
    const [totalCount, setTotalCount] = useState(0)
    let market_card = document.querySelectorAll('.market-card')


    useEffect(() => {
        $('#search_products').on('keyup', function(e){
            setQuery(e.target.value)
        })
      console.log(query)
    }, [query])
    
    useMemo(() => {
        return $('.market-card').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(query) > -1)
        })
    }, [query])

    let len = market_card.length
    const setLen = () =>{
        setTotalCount(len)
    }


    useEffect(() => {
        setLen()
    }, [])
    // useEffect(() => {
    //     document.addEventListener('load', setLen)
    //     return (
    //         document.removeEventListener('load', setLen)
    //     )
    // }, [])
    
    let f = 0;
    let n = 0;
    useEffect(() => {
        for (let i = 0; i < market_card.length; i++) {
            if(market_card[i].style.display === 'none'){
                n++
            }else{
                f++
            }
        }
        setResultCount(f)
    }, [query])

    
    return(
        <main className='w-full'>
            <SearchBar searchResults={resultCount} total={totalCount} />
            {/* <div>returned {resultCount} results for {query}</div> */}
            
            <section className='px-10 lg:px-28 py-10 flex flex-col md:flex-row gap-20 md:gap-28'>
                <SideBar />
                <MainMarket resultCount={resultCount} query={query} />
            </section>
          
        </main>
    )
}