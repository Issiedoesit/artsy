import React from 'react'



export default function ExploreCard(props){
    return(
        <div key={props.id} id={props.id} className="flex flex-row items-center justify-between px-4 lg:pl-20 lg:pr-twentyPercent py-10 lg:py-14">
            <h1 className='text-2xl lg:text-4xl font-satoshi-medium'>{props.title}</h1>
            <a href={props.link} className="flex flex-row items-center justify-center h-60px w-60px rounded-fiftyPercent border border-black">
                <svg className='hidden lg:block' width="81" height="71" viewBox="0 0 101 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M51.9839 11.4862C52.9332 10.5346 54.2207 10 55.5631 10C56.9055 10 58.193 10.5346 59.1423 11.4862L89.5178 41.9419C90.4668 42.8938 91 44.1847 91 45.5306C91 46.8766 90.4668 48.1675 89.5178 49.1193L59.1423 79.5751C58.1875 80.4997 56.9087 81.0114 55.5813 80.9998C54.2539 80.9882 52.9842 80.4544 52.0455 79.5133C51.1069 78.5722 50.5745 77.299 50.5629 75.9681C50.5514 74.6372 51.0617 73.355 51.9839 72.3977L73.7175 50.6066H15.0626C13.7199 50.6066 12.4322 50.0718 11.4828 49.1199C10.5334 48.168 10 46.8769 10 45.5306C10 44.1844 10.5334 42.8933 11.4828 41.9414C12.4322 40.9895 13.7199 40.4547 15.0626 40.4547H73.7175L51.9839 18.6636C51.0348 17.7117 50.5016 16.4208 50.5016 15.0749C50.5016 13.7289 51.0348 12.4381 51.9839 11.4862Z" fill="#4693ED"/>
                </svg>
                <svg className='block lg:hidden' width="54" height="42" viewBox="0 0 54 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 21C10 20.6759 10.1279 20.3651 10.3556 20.1359C10.5833 19.9067 10.8922 19.7779 11.2142 19.7779H39.8525L32.2103 12.0888C31.9823 11.8593 31.8542 11.5481 31.8542 11.2236C31.8542 10.8991 31.9823 10.5879 32.2103 10.3584C32.4383 10.1289 32.7475 10 33.07 10C33.3924 10 33.7016 10.1289 33.9296 10.3584L43.6433 20.1348C43.7564 20.2483 43.8461 20.3832 43.9073 20.5316C43.9685 20.6801 44 20.8393 44 21C44 21.1607 43.9685 21.3199 43.9073 21.4684C43.8461 21.6168 43.7564 21.7517 43.6433 21.8652L33.9296 31.6416C33.7016 31.8711 33.3924 32 33.07 32C32.7475 32 32.4383 31.8711 32.2103 31.6416C31.9823 31.4121 31.8542 31.1009 31.8542 30.7764C31.8542 30.4519 31.9823 30.1407 32.2103 29.9112L39.8525 22.2221H11.2142C10.8922 22.2221 10.5833 22.0933 10.3556 21.8641C10.1279 21.6349 10 21.3241 10 21Z" fill="#616161"/>
                </svg>
            </a>
        </div>
    )
}