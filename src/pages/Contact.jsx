import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assetsData'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact} alt="" className='w-full md:max-w-[480px]'/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our store</p>
          <p className='text-gray-500'>No. 45, Shwe Gone Daing Road,<br />Bahan Township, Yangon, Myanmar</p>
          <p className='text-gray-500'>Tel : +95 123 456 789 <br />Email : 6kKdI@example.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Fashion</p>
          <p className='text-gray-500'>Learn More about our teams and partnerships</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Learn More</button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact