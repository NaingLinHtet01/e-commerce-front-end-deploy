import React,{useState,useContext} from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assetsData'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method,setMethod] = useState('cod');

  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
        {/* Left */}
        <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
          <div className='text-xl sm:text-2xl my-3'>
            <Title text1={'DELIVERY'} text2={'INFORMATION'} />
          </div>
          <div className='flex gap-3'>
            <input type="text" placeholder='First Name' className='border border-gray-300 rounder py-1.5 px-3.5 w-full'/>
            <input type="text" placeholder='Last Name' className='border border-gray-300 rounder py-1.5 px-3.5 w-full'/>
          </div>
          <input type="email" placeholder='Email Address' className='border border-gray-300 rounder py-1.5 px-3.5 w-full'/>
          <input type="text" placeholder='Last Name' className='border border-gray-300 rounder py-1.5 px-3.5 w-full'/>
          <input type="text" placeholder='Street' className='border border-gray-300 rounder py-1.5 px-3.5 w-full'/>
          <div className='flex gap-3'>
            <input type="text" placeholder='City' className='border border-gray-300 rounder py-1.5 px-3.5 w-full'/>
            <input type="text" placeholder='State' className='border border-gray-300 rounder py-1.5 px-3.5 w-full'/>
          </div>
          <div className='flex gap-3'>
            <input type="number" placeholder='ZipCode' className='border border-gray-300 rounder py-1.5 px-3.5 w-full'/>
            <input type="text" placeholder='Country' className='border border-gray-300 rounder py-1.5 px-3.5 w-full'/>
          </div>
          <input type="number" placeholder='Phone Number' className='border border-gray-300 rounder py-1.5 px-3.5 w-full'/>
        </div>
        {/* Right */}
        <div className='mt-8'>
          <div className='mt-8 min-w-80'>
            <CartTotal />
          </div>
          <div className='mt-12'>
            <Title text1={'PAYMENT'} text2={'METHOD'} />
            <div className='flex gap-3 flex-col lg:flex-row'>
              <div onClick={()=>setMethod('kbzpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'kbzpay' ? 'bg-black' : ''}`}></p>
                <img src={assets.kbzpay} alt="" className='h-8 mx-4'/>
              </div>
              <div onClick={()=>setMethod('ayapay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'ayapay' ? 'bg-black' : ''}`}></p>
                <img src={assets.aya} alt="" className='h-8 mx-4'/>
              </div>
              <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-black' : ''}`}></p>
                <p className='text-gray-600 text-sm font-medium mx-4'>Cash on Delivery</p>
              </div>
            </div>
            
            <div className='w-full text-end mt-8'>
              <button className='bg-black text-white px-16 py-3 text-sm' onClick={()=>navigate('/orders')}>Place Order</button>
            </div>

          </div>
        </div>
    </div>
  )
}

export default PlaceOrder