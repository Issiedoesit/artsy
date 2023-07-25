import {React, useState, useRef} from 'react'
import $ from 'jquery'





export default function SideBar(){

    const [openAccordion, setOpenAccordion] = useState(false)
    const [float, setFloat] = useState(false)
//    const toggleAccordion = () =>{
       
//    }


// useEffect(() => {
//    console.log('hi');
 
// }, [openAccordion])
// $('.accordion').each(function(){
//     $(this).on('click', function(e){
//         e.preventDefault()
//         console.log(openAccordion);
//         $(this).siblings('.accordion-content').slideToggle(200)
//     })
// })


const toggle = key =>{
    if(openAccordion === key){
        $('.accordion-content').eq(key).slideUp(200)
        $('.accordion').children('svg').eq(key).addClass('rotate-180')
        return setOpenAccordion(null)
    }
    $('.accordion-content').eq(key).slideDown(200)
    $('.accordion').children('svg').eq(key).removeClass('rotate-180')
    setOpenAccordion(key)
}

return(
    <aside className='md:space-y-10 w-full md:w-twentyPercent md:block'>
        <div className='md:flex flex-row items-center gap-6 hidden md:py-4 border-b-4 border-grey4x w-fit md:pl-10 pr-10 lg:pr-20'>
            <svg className='w-6 md:w-auto' width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0417 4.42208C10.456 4.42208 9.89428 4.65474 9.48014 5.06888C9.066 5.48303 8.83333 6.04472 8.83333 6.63041C8.83333 7.2161 9.066 7.7778 9.48014 8.19194C9.89428 8.60608 10.456 8.83874 11.0417 8.83874C11.6274 8.83874 12.1891 8.60608 12.6032 8.19194C13.0173 7.7778 13.25 7.2161 13.25 6.63041C13.25 6.04472 13.0173 5.48303 12.6032 5.06888C12.1891 4.65474 11.6274 4.42208 11.0417 4.42208ZM4.79208 4.42208C5.24833 3.12903 6.09442 2.00933 7.21374 1.21732C8.33306 0.425316 9.67048 0 11.0417 0C12.4128 0 13.7503 0.425316 14.8696 1.21732C15.9889 2.00933 16.835 3.12903 17.2912 4.42208H33.125C33.7107 4.42208 34.2724 4.65474 34.6865 5.06888C35.1007 5.48303 35.3333 6.04472 35.3333 6.63041C35.3333 7.2161 35.1007 7.7778 34.6865 8.19194C34.2724 8.60608 33.7107 8.83874 33.125 8.83874H17.2912C16.835 10.1318 15.9889 11.2515 14.8696 12.0435C13.7503 12.8355 12.4128 13.2608 11.0417 13.2608C9.67048 13.2608 8.33306 12.8355 7.21374 12.0435C6.09442 11.2515 5.24833 10.1318 4.79208 8.83874H2.20833C1.62265 8.83874 1.06095 8.60608 0.646806 8.19194C0.232663 7.7778 0 7.2161 0 6.63041C0 6.04472 0.232663 5.48303 0.646806 5.06888C1.06095 4.65474 1.62265 4.42208 2.20833 4.42208H4.79208ZM24.2917 17.6721C23.706 17.6721 23.1443 17.9047 22.7301 18.3189C22.316 18.733 22.0833 19.2947 22.0833 19.8804C22.0833 20.4661 22.316 21.0278 22.7301 21.4419C23.1443 21.8561 23.706 22.0887 24.2917 22.0887C24.8774 22.0887 25.4391 21.8561 25.8532 21.4419C26.2673 21.0278 26.5 20.4661 26.5 19.8804C26.5 19.2947 26.2673 18.733 25.8532 18.3189C25.4391 17.9047 24.8774 17.6721 24.2917 17.6721ZM18.0421 17.6721C18.4983 16.379 19.3444 15.2593 20.4637 14.4673C21.5831 13.6753 22.9205 13.25 24.2917 13.25C25.6628 13.25 27.0003 13.6753 28.1196 14.4673C29.2389 15.2593 30.085 16.379 30.5412 17.6721H33.125C33.7107 17.6721 34.2724 17.9047 34.6865 18.3189C35.1007 18.733 35.3333 19.2947 35.3333 19.8804C35.3333 20.4661 35.1007 21.0278 34.6865 21.4419C34.2724 21.8561 33.7107 22.0887 33.125 22.0887H30.5412C30.085 23.3818 29.2389 24.5015 28.1196 25.2935C27.0003 26.0855 25.6628 26.5108 24.2917 26.5108C22.9205 26.5108 21.5831 26.0855 20.4637 25.2935C19.3444 24.5015 18.4983 23.3818 18.0421 22.0887H2.20833C1.62265 22.0887 1.06095 21.8561 0.646806 21.4419C0.232663 21.0278 0 20.4661 0 19.8804C0 19.2947 0.232663 18.733 0.646806 18.3189C1.06095 17.9047 1.62265 17.6721 2.20833 17.6721H18.0421ZM11.0417 30.9221C10.456 30.9221 9.89428 31.1547 9.48014 31.5689C9.066 31.983 8.83333 32.5447 8.83333 33.1304C8.83333 33.7161 9.066 34.2778 9.48014 34.6919C9.89428 35.1061 10.456 35.3387 11.0417 35.3387C11.6274 35.3387 12.1891 35.1061 12.6032 34.6919C13.0173 34.2778 13.25 33.7161 13.25 33.1304C13.25 32.5447 13.0173 31.983 12.6032 31.5689C12.1891 31.1547 11.6274 30.9221 11.0417 30.9221ZM4.79208 30.9221C5.24833 29.629 6.09442 28.5093 7.21374 27.7173C8.33306 26.9253 9.67048 26.5 11.0417 26.5C12.4128 26.5 13.7503 26.9253 14.8696 27.7173C15.9889 28.5093 16.835 29.629 17.2912 30.9221H33.125C33.7107 30.9221 34.2724 31.1547 34.6865 31.5689C35.1007 31.983 35.3333 32.5447 35.3333 33.1304C35.3333 33.7161 35.1007 34.2778 34.6865 34.6919C34.2724 35.1061 33.7107 35.3387 33.125 35.3387H17.2912C16.835 36.6318 15.9889 37.7515 14.8696 38.5435C13.7503 39.3355 12.4128 39.7608 11.0417 39.7608C9.67048 39.7608 8.33306 39.3355 7.21374 38.5435C6.09442 37.7515 5.24833 36.6318 4.79208 35.3387H2.20833C1.62265 35.3387 1.06095 35.1061 0.646806 34.6919C0.232663 34.2778 0 33.7161 0 33.1304C0 32.5447 0.232663 31.983 0.646806 31.5689C1.06095 31.1547 1.62265 30.9221 2.20833 30.9221H4.79208Z" fill="black"/>
            </svg>
            <h1 className='font-satoshi-medium text-lg md:text-2xl'>Filter</h1>
        </div>
        <button type='button' onClick={()=>setFloat(true)} className='flex md:hidden flex-row items-center gap-6 md:py-4 border-b-4 border-grey4x w-fit md:pl-10 pr-10 lg:pr-20'>
            <svg className='w-6 md:w-auto' width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0417 4.42208C10.456 4.42208 9.89428 4.65474 9.48014 5.06888C9.066 5.48303 8.83333 6.04472 8.83333 6.63041C8.83333 7.2161 9.066 7.7778 9.48014 8.19194C9.89428 8.60608 10.456 8.83874 11.0417 8.83874C11.6274 8.83874 12.1891 8.60608 12.6032 8.19194C13.0173 7.7778 13.25 7.2161 13.25 6.63041C13.25 6.04472 13.0173 5.48303 12.6032 5.06888C12.1891 4.65474 11.6274 4.42208 11.0417 4.42208ZM4.79208 4.42208C5.24833 3.12903 6.09442 2.00933 7.21374 1.21732C8.33306 0.425316 9.67048 0 11.0417 0C12.4128 0 13.7503 0.425316 14.8696 1.21732C15.9889 2.00933 16.835 3.12903 17.2912 4.42208H33.125C33.7107 4.42208 34.2724 4.65474 34.6865 5.06888C35.1007 5.48303 35.3333 6.04472 35.3333 6.63041C35.3333 7.2161 35.1007 7.7778 34.6865 8.19194C34.2724 8.60608 33.7107 8.83874 33.125 8.83874H17.2912C16.835 10.1318 15.9889 11.2515 14.8696 12.0435C13.7503 12.8355 12.4128 13.2608 11.0417 13.2608C9.67048 13.2608 8.33306 12.8355 7.21374 12.0435C6.09442 11.2515 5.24833 10.1318 4.79208 8.83874H2.20833C1.62265 8.83874 1.06095 8.60608 0.646806 8.19194C0.232663 7.7778 0 7.2161 0 6.63041C0 6.04472 0.232663 5.48303 0.646806 5.06888C1.06095 4.65474 1.62265 4.42208 2.20833 4.42208H4.79208ZM24.2917 17.6721C23.706 17.6721 23.1443 17.9047 22.7301 18.3189C22.316 18.733 22.0833 19.2947 22.0833 19.8804C22.0833 20.4661 22.316 21.0278 22.7301 21.4419C23.1443 21.8561 23.706 22.0887 24.2917 22.0887C24.8774 22.0887 25.4391 21.8561 25.8532 21.4419C26.2673 21.0278 26.5 20.4661 26.5 19.8804C26.5 19.2947 26.2673 18.733 25.8532 18.3189C25.4391 17.9047 24.8774 17.6721 24.2917 17.6721ZM18.0421 17.6721C18.4983 16.379 19.3444 15.2593 20.4637 14.4673C21.5831 13.6753 22.9205 13.25 24.2917 13.25C25.6628 13.25 27.0003 13.6753 28.1196 14.4673C29.2389 15.2593 30.085 16.379 30.5412 17.6721H33.125C33.7107 17.6721 34.2724 17.9047 34.6865 18.3189C35.1007 18.733 35.3333 19.2947 35.3333 19.8804C35.3333 20.4661 35.1007 21.0278 34.6865 21.4419C34.2724 21.8561 33.7107 22.0887 33.125 22.0887H30.5412C30.085 23.3818 29.2389 24.5015 28.1196 25.2935C27.0003 26.0855 25.6628 26.5108 24.2917 26.5108C22.9205 26.5108 21.5831 26.0855 20.4637 25.2935C19.3444 24.5015 18.4983 23.3818 18.0421 22.0887H2.20833C1.62265 22.0887 1.06095 21.8561 0.646806 21.4419C0.232663 21.0278 0 20.4661 0 19.8804C0 19.2947 0.232663 18.733 0.646806 18.3189C1.06095 17.9047 1.62265 17.6721 2.20833 17.6721H18.0421ZM11.0417 30.9221C10.456 30.9221 9.89428 31.1547 9.48014 31.5689C9.066 31.983 8.83333 32.5447 8.83333 33.1304C8.83333 33.7161 9.066 34.2778 9.48014 34.6919C9.89428 35.1061 10.456 35.3387 11.0417 35.3387C11.6274 35.3387 12.1891 35.1061 12.6032 34.6919C13.0173 34.2778 13.25 33.7161 13.25 33.1304C13.25 32.5447 13.0173 31.983 12.6032 31.5689C12.1891 31.1547 11.6274 30.9221 11.0417 30.9221ZM4.79208 30.9221C5.24833 29.629 6.09442 28.5093 7.21374 27.7173C8.33306 26.9253 9.67048 26.5 11.0417 26.5C12.4128 26.5 13.7503 26.9253 14.8696 27.7173C15.9889 28.5093 16.835 29.629 17.2912 30.9221H33.125C33.7107 30.9221 34.2724 31.1547 34.6865 31.5689C35.1007 31.983 35.3333 32.5447 35.3333 33.1304C35.3333 33.7161 35.1007 34.2778 34.6865 34.6919C34.2724 35.1061 33.7107 35.3387 33.125 35.3387H17.2912C16.835 36.6318 15.9889 37.7515 14.8696 38.5435C13.7503 39.3355 12.4128 39.7608 11.0417 39.7608C9.67048 39.7608 8.33306 39.3355 7.21374 38.5435C6.09442 37.7515 5.24833 36.6318 4.79208 35.3387H2.20833C1.62265 35.3387 1.06095 35.1061 0.646806 34.6919C0.232663 34.2778 0 33.7161 0 33.1304C0 32.5447 0.232663 31.983 0.646806 31.5689C1.06095 31.1547 1.62265 30.9221 2.20833 30.9221H4.79208Z" fill="black"/>
            </svg>
            <h1 className='font-satoshi-medium text-lg md:text-2xl'>Filter</h1>
        </button>
        
        <section  className={`space-y-10 ${float ? '' : 'invisible md:visible opacity-0 md:opacity-100 h-0 w-0 md:w-full md:h-auto'} transition-all ease-in-out duration-500 hover:drop-shadow-lg w-full bg-white pt-16 pb-8 md:py-0 px-4 md:px-0 h-screen fixed top-0 left-0 md:bg-transparent md:static md:block`}>
            <button onClick={()=>setFloat(false)} type='button' className={`flex md:hidden fixed top-4 right-4 text-xl font-semibold px-4 py-2 rounded-lg border border-black`}>
                X
            </button>
            <div>
                <div onClick={()=>toggle(0)} className='accordion cursor-pointer flex flex-50w items-center justify-between'>
                    <h1 className='font-satoshi-medium text-xl'>By Category</h1>
                    <svg className='rotate-180' width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.352185 8.65584C0.577756 8.87621 0.883656 9 1.20262 9C1.52157 9 1.82747 8.87621 2.05305 8.65584L8.00726 2.83731L13.9615 8.65584C14.1883 8.86996 14.4922 8.98844 14.8076 8.98576C15.123 8.98308 15.4247 8.85946 15.6477 8.64152C15.8707 8.42358 15.9972 8.12876 16 7.82056C16.0027 7.51236 15.8815 7.21543 15.6623 6.99374L8.85769 0.344158C8.63212 0.123794 8.32622 0 8.00726 0C7.6883 0 7.3824 0.123794 7.15683 0.344158L0.352185 6.99374C0.126681 7.21417 0 7.5131 0 7.82479C0 8.13648 0.126681 8.43541 0.352185 8.65584Z" fill="#2F2F2F"/>
                    </svg>
                </div>
                <div className='accordion-content hidden font-satoshi-regular text-grey2x pt-10 space-y-4'>
                    <label htmlFor="editorials" className='check-label  flex flex-row items-center gap-3'>
                        <input type="checkbox" name="editorials" id="editorials" className='hidden'/>
                        <div className='h-5 w-5 bg-lightGrey4x rounded-five style-check'></div>
                        <p>Editorials</p>
                    </label>
                    <label htmlFor="fashion" className='check-label  flex flex-row items-center gap-3'>
                        <input type="checkbox" name="fashion" id="fashion" className='hidden'/>
                        <div className='h-5 w-5 bg-lightGrey4x rounded-five style-check'></div>
                        <p>Fashion</p>
                    </label>
                    <label htmlFor="optics" className='check-label  flex flex-row items-center gap-3'>
                        <input type="checkbox" name="optics" id="optics" className='hidden'/>
                        <div className='h-5 w-5 bg-lightGrey4x rounded-five style-check'></div>
                        <p>Optics</p>
                    </label>
                    <label htmlFor="a_and_m" className='check-label  flex flex-row items-center gap-3'>
                        <input type="checkbox" name="artAndMusuem" id="a_and_m" className='hidden'/>
                        <div className='h-5 w-5 bg-lightGrey4x rounded-five style-check'></div>
                        <p>Art & Museum</p>
                    </label>
                    <label htmlFor="nature" className='check-label  flex flex-row items-center gap-3'>
                        <input type="checkbox" name="nature" id="nature" className='hidden'/>
                        <div className='h-5 w-5 bg-lightGrey4x rounded-five style-check'></div>
                        <p>Nature</p>
                    </label>
                </div>
            </div>
            <div>
                <div onClick={()=>toggle(1)} className='accordion cursor-pointer flex flex-50w items-center justify-between'>
                    <h1 className='font-satoshi-medium text-xl'>By Price</h1>
                    <svg className='rotate-180' width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.352185 8.65584C0.577756 8.87621 0.883656 9 1.20262 9C1.52157 9 1.82747 8.87621 2.05305 8.65584L8.00726 2.83731L13.9615 8.65584C14.1883 8.86996 14.4922 8.98844 14.8076 8.98576C15.123 8.98308 15.4247 8.85946 15.6477 8.64152C15.8707 8.42358 15.9972 8.12876 16 7.82056C16.0027 7.51236 15.8815 7.21543 15.6623 6.99374L8.85769 0.344158C8.63212 0.123794 8.32622 0 8.00726 0C7.6883 0 7.3824 0.123794 7.15683 0.344158L0.352185 6.99374C0.126681 7.21417 0 7.5131 0 7.82479C0 8.13648 0.126681 8.43541 0.352185 8.65584Z" fill="#2F2F2F"/>
                    </svg>
                </div>
                <div className='accordion-content hidden font-satoshi-regular text-grey2x pt-10 space-y-4'>
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="filter_price"><span className='price_low_end'>$100.00</span> - <span className='price_high_end'>$150.00</span></label>
                        <input type="range" name="filter-price" id="filter_price" min="0" max="200"  className='w-eightyPercent accent-black'/>
                    </div>
                </div>
            </div>
            <div>
                <div onClick={()=>toggle(2)} className='accordion cursor-pointer flex flex-50w items-center justify-between'>
                    <h1 className='font-satoshi-medium text-xl'>By Artist</h1>
                    <svg className='rotate-180' width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.352185 8.65584C0.577756 8.87621 0.883656 9 1.20262 9C1.52157 9 1.82747 8.87621 2.05305 8.65584L8.00726 2.83731L13.9615 8.65584C14.1883 8.86996 14.4922 8.98844 14.8076 8.98576C15.123 8.98308 15.4247 8.85946 15.6477 8.64152C15.8707 8.42358 15.9972 8.12876 16 7.82056C16.0027 7.51236 15.8815 7.21543 15.6623 6.99374L8.85769 0.344158C8.63212 0.123794 8.32622 0 8.00726 0C7.6883 0 7.3824 0.123794 7.15683 0.344158L0.352185 6.99374C0.126681 7.21417 0 7.5131 0 7.82479C0 8.13648 0.126681 8.43541 0.352185 8.65584Z" fill="#2F2F2F"/>
                    </svg>
                </div>
                <div className='accordion-content hidden font-satoshi-regular text-grey2x pt-10 space-y-4'>
                    <label htmlFor="all" className='artist-label cursor-pointer flex flex-row items-center gap-3'>
                        <input type="checkbox" name="all" id="all" className='hidden peer' checked/>
                        <p className='peer-checked:underline underline-offset-2'>All</p>
                    </label>
                    <label htmlFor="below_hundred" className='artist-label cursor-pointer flex flex-row items-center gap-3'>
                        <input type="checkbox" name="below-hundred" id="below_hundred" className='hidden peer'/>
                        <p className='peer-checked:underline underline-offset-2'>Below $100.00</p>
                    </label>
                    <label htmlFor="hundred_to_onefifty" className='artist-label cursor-pointer flex flex-row items-center gap-3'>
                        <input type="checkbox" name="hundred-to-onefifty" id="hundred_to_onefifty" className='hidden peer'/>
                        <p className='peer-checked:underline underline-offset-2'>$100.00 - $150.00</p>
                    </label>
                    <label htmlFor="onefifty_to_twohundred" className='artist-label cursor-pointer flex flex-row items-center gap-3'>
                        <input type="checkbox" name="onefifty-to-twohundred" id="onefifty_to_twohundred" className='hidden peer'/>
                        <p className='peer-checked:underline underline-offset-2'>$150.00 - $200.00</p>
                    </label>
                    <label htmlFor="above_twohundred" className='artist-label cursor-pointer flex flex-row items-center gap-3'>
                        <input type="checkbox" name="above-twohundred" id="above_twohundred" className='hidden peer'/>
                        <p className='peer-checked:underline underline-offset-2'>Above $200.00</p>
                    </label>
                </div>
            </div>
            <div>
                <div onClick={()=>toggle(3)} className='accordion cursor-pointer flex flex-50w items-center justify-between'>
                    <h1 className='font-satoshi-medium text-xl'> Collection year</h1>
                    <svg className='rotate-180' width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.352185 8.65584C0.577756 8.87621 0.883656 9 1.20262 9C1.52157 9 1.82747 8.87621 2.05305 8.65584L8.00726 2.83731L13.9615 8.65584C14.1883 8.86996 14.4922 8.98844 14.8076 8.98576C15.123 8.98308 15.4247 8.85946 15.6477 8.64152C15.8707 8.42358 15.9972 8.12876 16 7.82056C16.0027 7.51236 15.8815 7.21543 15.6623 6.99374L8.85769 0.344158C8.63212 0.123794 8.32622 0 8.00726 0C7.6883 0 7.3824 0.123794 7.15683 0.344158L0.352185 6.99374C0.126681 7.21417 0 7.5131 0 7.82479C0 8.13648 0.126681 8.43541 0.352185 8.65584Z" fill="#2F2F2F"/>
                    </svg>
                </div>
                <div className='accordion-content hidden font-satoshi-regular text-grey2x pt-10 space-y-4'>
                    <label htmlFor="" className='artist-label cursor-pointer flex flex-row items-center gap-3'>
                        <input type="checkbox" name="" id="" className='hidden peer' checked/>
                        <p className='peer-checked:underline underline-offset-2'>2022</p>
                    </label>
                </div>
            </div>
        </section>
    </aside>
)
}