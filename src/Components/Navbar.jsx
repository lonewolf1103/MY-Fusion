import React from 'react'
import { useState } from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { MapPin } from 'lucide-react'
import { BiCaretDown } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { IoCarOutline, IoCartOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({location,getLocation,openDropdown,setOpenDropdown}) => {

  
  const toggleDropdown = ()=>{
    setOpenDropdown(!openDropdown)
  };
 
  return (
    <div className='bg-black py-3 shadow-2xl'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        {/* {logo section} */}
        <div className='flex gap-7 items-center'>
          <Link to={'/'}><h1 className='font-bold text-3xl text-white'> <span className='text-purple-400'>MY</span> Fusion</h1></Link>

          <div className='flex gap-1 cursor-pointer text-white items-center'>
            <MapPin className='text-purple-400' />
            <span className='font-semibold'>{location ? <div className='-space-y-2'>
              <p>{location.county}</p>
              <p>{location.state}</p>
            </div> : "Add Your Address"}</span>
            <BiCaretDown onClick={toggleDropdown} />
          </div>
          {
            openDropdown?<div className='w-[250] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md'>
            <h1 className='flex justify-between font-semibold mb-4 text-xl'>Change Location <span className='cursor-pointer'><CgClose onClick={toggleDropdown}/></span></h1>
            <button onClick={getLocation} className='bg-purple-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-purple-400'>Detect My Location</button>
            </div> : null
          }
        </div>
        {/* {menu section} */}
        <nav className='flex gap-7 items-center'>
          <ul className='flex gap-7 items-center text-xl font-semibold text-white'>
            <NavLink to={'/'} className={({ isActive }) => `${isActive ? 'border-b-3 transition-all border-purple-500' : 'text-white'} cursor-pointer`}><li>Home</li></NavLink>
            <NavLink to={'/products'} className={({ isActive }) => `${isActive ? 'border-b-3 transition-all border-purple-500' : 'text-white'} cursor-pointer`}><li>Products</li></NavLink>
            <NavLink to={'/about'} className={({ isActive }) => `${isActive ? 'border-b-3 transition-all border-purple-500' : 'text-white'} cursor-pointer`}><li>About</li></NavLink>
            <NavLink to={'contact'} className={({ isActive }) => `${isActive ? 'border-b-3 transition-all border-purple-500' : 'text-white'} cursor-pointer`}><li>Contact</li></NavLink>
          </ul>
          <Link to={'/cart'} className='relative'>
            <IoCartOutline className='h-7 w-7 bg-black text-white rounded-xl' />
            <span className='bg-purple-500 rounded-full absolute -top-3 -right-3 text-white px-1.5'>0</span>
          </Link>
          <div>
            <SignedOut>
              <SignInButton className="bg-purple-500 text-white px-3 py-1 rounded-md cursor-pointer font-semibold" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
