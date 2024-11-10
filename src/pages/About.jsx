import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assetsData'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img src={assets.about} alt="" className='w-full md:max-w-[450px]'/>
          <div className='flex flex-col justify-center gap-6 md:2/4 text-gray-600'>
            <p>Welcome to Fashion, your one-stop destination for quality products and exceptional service. Our mission is to offer a seamless and enjoyable shopping experience, where you can find everything you need in one place, from the latest trends to essential everyday items.
            </p>
            <p>
            Founded in 2024, we are a passionate team dedicated to transforming online shopping. We believe that quality, affordability, and customer satisfaction should be accessible to all. Every product in our collection is carefully curated, ensuring only the best make it to your cart. With fast shipping, secure payments, and a user-friendly platform, we make shopping online a breeze.
            </p>
            <p>Why Choose Us?</p>
            <ul>
              <li className='list-disc mx-8 my-3'>We offer the best quality products at affordable prices.</li>
              <li className='list-disc mx-8 my-3'>Our customer service is top-notch, always ready to help.</li>
              <li className='list-disc mx-8 my-3'>Fast shipping and secure payments ensure a smooth shopping experience.</li>
            </ul>
            <p>
            Thank you for choosing [Your Company Name]. We're excited to be a part of your journey, providing you with the products you love and the service you deserve.
            </p>
            <p>
              If you have any questions or need assistance, please don't hesitate to contact us. We're here to help.
            </p>
          </div>
        </div>
        <NewsletterBox/>
    </div>
  )
}

export default About