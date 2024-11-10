import React, { useState } from 'react'
import {assets} from '../assets/assetsData'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const [visible,setVisible] = useState(false);
    const {setShowSearch, getCartCount} = useContext(ShopContext)
    
    function toggleMenu(){
        setVisible((preVisible)=>!preVisible)
    }

  return (
    <div className='flex items-center justify-between py-10 font-medium'>
        
        <Link to='/'>
        <img src={assets.logo} alt='logo' className='w-36'/>
        </Link>

        <ul className='hidden sm:flex gap-6 text-sm text-gray-700'>
            <NavLink to='/e-commerce-front-end-deploy' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
            <img src={assets.search} alt="search" className='w-5 cursor-pointer' onClick={()=>setShowSearch(true)}/>
            <div className='group relative'>
                <Link to='/login'><img src={assets.profile} alt="profile" className='w-5 cursor-pointer'/></Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black items-center text-center'>My Profile</p>
                        <p className='cursor-pointer hover:text-black items-center text-center'>Orders</p>
                        <p className='cursor-pointer hover:text-black items-center text-center'>Log Out</p>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
                <img src={assets.cart} alt="cart" className='w-5 min-w-5'/>
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            <img src={(visible)? assets.menuClose : assets.menuOpen} alt="menu" className='w-5 cursor-pointer sm:hidden' onClick={toggleMenu} />
        </div>
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div className='flex items-center gap-4 p-3 cursor-pointer' onClick={toggleMenu}>
                    <img src={assets.dropList} alt="back" className='h-5 rotate-180' />
                    <p className='text-center
                     items-center'>Back</p>
                </div>
                <NavLink onClick={toggleMenu} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                <NavLink onClick={toggleMenu} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                <NavLink onClick={toggleMenu} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                <NavLink onClick={toggleMenu} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar