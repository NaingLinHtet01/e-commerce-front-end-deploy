import React from 'react'
import { assets } from '../assets/assetsData'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 test-xs sm:text-sm md:text-base text-gray-500'>

        <div>
            <img src={assets.exchange} alt="" className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
        <div>
        <img src={assets.quality} alt="" className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We provide 7 days free return policy</p>
        </div>
        <div>
        <img src={assets.service} alt="" className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Best Customer support</p>
            <p className='text-gray-400'>We provide <strong>24/7</strong> customer support!</p>
        </div>

    </div>
  )
}

export default OurPolicy