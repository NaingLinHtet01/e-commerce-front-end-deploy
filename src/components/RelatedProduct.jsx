import React, { useContext, useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title'

const RelatedProduct = ({category,subCategory}) => {

    const {productData} = useContext(ShopContext);
    const [related,setRelated] = useState([]);

    useEffect(()=>{

        if(productData.length > 0){
            let productCopy = productData.slice();
            productCopy = productCopy.filter((item)=>category === item.category);
            productCopy = productCopy.filter((item)=> subCategory === item.subCategory);
            setRelated(productCopy.slice(0,5));
        }

    },[productData])

  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={'Related'} text2={'Products'}/>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {related.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
            ))}
        </div>
    </div>
  )
}

export default RelatedProduct