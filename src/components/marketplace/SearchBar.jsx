import {React} from 'react'
import marketData from '../../data/market/marketData'



export default function SearchBar(){
    
    // const productRef = useRef()
    // const [searchTerm, setSearchTerm] = useState('')

    // const sendRef = () => {
    //     setSearchTerm(productRef.current.value)
    //     props.sendData(searchTerm)
    // }
    return(
        <div className='px-4 sm:px-10 md:px-28 gap-8 md:gap-0 py-16 flex flex-col md:flex-row items-center justify-between'>
            <label htmlFor="search_products" className='block relative rounded-fifteen bg-lightGrey2x py-4 pl-11 pr-4 w-full md:w-auto'>
                <svg className='absolute top-fiftyPercent -translate-y-fiftyPercent left-4' width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9741 23.947C14.6309 23.9464 17.211 23.0571 19.3038 21.4206L25.8836 28L28 25.8837L21.4202 19.3043C23.0577 17.2114 23.9476 14.6308 23.9483 11.9735C23.9483 5.37161 18.5764 0 11.9741 0C5.37189 0 0 5.37161 0 11.9735C0 18.5754 5.37189 23.947 11.9741 23.947ZM11.9741 2.99337C16.9269 2.99337 20.9547 7.02095 20.9547 11.9735C20.9547 16.926 16.9269 20.9536 11.9741 20.9536C7.02133 20.9536 2.99353 16.926 2.99353 11.9735C2.99353 7.02095 7.02133 2.99337 11.9741 2.99337Z" fill="#999999"/>
                </svg>
                <input className='font-satoshi-medium text-lg bg-transparent w-40 text-lightGrey3x focus:outline-none' type="search" name="search-products" id="search_products" placeholder='Search' />
            </label>
            <div className='bg-white rounded-fifteen pl-7 pr-4 drop-shadow-xl border-0.5 shadow-black/10 flex flex-row py-4 items-center justify-between w-full md:w-seventyPercent'>
                <div className='font-satoshi-regular'>
                    <p>See <span id='result_initial'>1</span>-<span id='result_limit'>{marketData.length}</span> of <span id='total_result'>{marketData.length}</span> results</p>
                </div>
                <label htmlFor="sort" className='relative'>
                    <select name="sort" id="sort" className='py-tenPixel font-satoshi-medium text-black disabled:text-black rounded-lg cursor-pointer pl-10 pr-12 border-0.5 border-black appearance-none'>
                        <option value="Sort by" disabled>Sort by</option>
                    </select>
                    <svg className='absolute right-5 top-fiftyPercent -translate-y-fiftyPercent' width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.352185 0.344159C0.577756 0.123794 0.883656 0 1.20262 0C1.52157 0 1.82747 0.123794 2.05305 0.344159L8.00726 6.16269L13.9615 0.344159C14.1883 0.130039 14.4922 0.0115592 14.8076 0.0142373C15.123 0.0169155 15.4247 0.140538 15.6477 0.358478C15.8707 0.576418 15.9972 0.871238 16 1.17944C16.0027 1.48764 15.8815 1.78457 15.6623 2.00626L8.85769 8.65584C8.63212 8.87621 8.32622 9 8.00726 9C7.6883 9 7.3824 8.87621 7.15683 8.65584L0.352185 2.00626C0.126681 1.78583 0 1.4869 0 1.17521C0 0.863519 0.126681 0.564591 0.352185 0.344159Z" fill="#2F2F2F"/>
                    </svg>
                </label>
            </div>
        </div>
    )
}