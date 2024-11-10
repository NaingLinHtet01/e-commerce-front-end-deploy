import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assetsData';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  
  const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
  const location = useLocation();
  const [visible,setVisible] = useState(false)

  useEffect(()=>{
    if(location.pathname.includes('collection')){
        setVisible(true);
    }
    else{
        setVisible(false);
    }
},[location])
  
    return showSearch && visible? (
    <div className='border border-b bg-gray-50 text-center'>
        <div className='inline-flex item-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <img src={assets.search} alt="search" className='w-4'/>
        </div>
        <img src={assets.close} alt="" className='inline w-3 cursor-pointer
        ' onClick={()=>(setShowSearch(false))}/>
    </div>
  ) : null
}

export default SearchBar