import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assetsData'
import RelatedProduct from '../components/RelatedProduct';


const Product = () => {

  const {productId} = useParams();
  const {productData, currency,addToCart} = useContext(ShopContext);
  const [itemData,setItemData] = useState(false);
  const [image,setImage] = useState('');
  const [size,setSize] = useState('')

  const fetchItemData = async() => {

    productData.map((item)=>{
      if(item._id === productId){ 
        setItemData(item);
        setImage(item.image[0]);
        return null;
      }
    })

  }

  useEffect(()=>{
    fetchItemData();
  },[productId])


  return itemData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row '>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full scrollbar-hidden'>
              {
                itemData.image.map((item,index)=>(
                  <img onClick={()=>setImage(item)} src={item} key={index} alt="product_image" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
                ))
              }
          </div>
          <div className='w-full sm:w-[80%]'>
              <img
                src={image}
                className="w-full h-auto"
                alt=""
              />
              
          </div>
        </div>
        {/* info */}
        <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-2'>{itemData.name}</h1>
              <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star} alt="" className="w-3.5" />
                <img src={assets.star} alt="" className="w-3.5" />
                <img src={assets.star} alt="" className="w-3.5" />
                <img src={assets.star} alt="" className="w-3.5" />
                <img src={assets.star} alt="" className="w-3.5" />
                <p className='p-2'>(150)</p>
              </div>
              <p className='mt-5 text-3xl font-medium'>{currency}{itemData.price}</p>
              <p className='mt-5 text-gray-500 md:4/5'>{itemData.description}</p>
              <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                <div className='flex gap-2'>
                  {itemData.sizes.map((item,index)=>(
                    <button key={index} className={`border py-2 px-4  ${item === size? 'text-white bg-black transition-all ease-in-out duration-100': 'bg-gray-200'}`} onClick={()=>setSize(item)}>{item}</button>
                  ))}
                </div>
              </div>
              <button onClick={()=>addToCart(itemData._id,size)} className='bg-black text-white py-3 px-8 text-sm active:bg-slate-700'>ADD TO CART</button>
              <hr className='mt-8 sm:w-4/5'/>
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                  <p>100% Original product</p>
                  <p>Cash on Delivery Available</p>
                  <p>Easy 30 days returns and exchanges</p>
              </div>
        </div>
      </div>  

                  {/* Description Review */}
      <div className='mt-20'>
          <div className='flex'>
                  <b className='border px-5 py-3 text-sm'>Description</b>
                  <p className='border px-5 py-3 text-sm'>Review</p>
          </div>
          <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta itaque labore autem ipsa optio, magni tenetur ab voluptatem esse sint. Nulla sit sequi inventore voluptatum dolor veniam exercitationem repellendus ipsam.</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
      </div>            

                  {/* related product */}
                  <RelatedProduct category={itemData.category} subCategory={itemData.subCategory}/>

    </div>
  ): (
  <div className='opacity-0'>

  </div>
  )
}

export default Product