import React, { useState } from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { BiMenu, BiX } from 'react-icons/bi';
import { IoCartOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const toggleMenu = () => setMenuOpen(prev => !prev);

  const navLinkClasses = ({ isActive }) =>
    `${isActive ? 'text-black border-b-2 border-black' : 'text-gray-700'} hover:text-black transition-all`;

  return (
    <header className='bg-gray-100 text-black py-4 shadow-md fixed top-0 w-full z-50'>
      <div className='max-w-6xl mx-auto flex items-center justify-between px-4'>

        {/* Logo */}
        <Link to='/'>
          <h1 className='text-2xl font-bold tracking-wide'>
            <span>
              <img src="public\Logo\WhatsApp Image 2025-05-27 at 22.41.49.jpeg" alt="LOGO" className='h-12 w-auto object-contain' />
            </span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex gap-8 text-lg font-medium items-center'>
          <NavLink to='/' className={navLinkClasses}>Home</NavLink>
          <NavLink to='/products' className={navLinkClasses}>Products</NavLink>
          <NavLink to='/about' className={navLinkClasses}>About</NavLink>
          {/* <NavLink to='/contact' className={navLinkClasses}>Contact</NavLink> */}
        </nav>

        {/* Right Side Icons */}
        <div className='flex items-center gap-4'>

          {/* Cart */}
          <Link to='/CartPage' className='relative'>
            <IoCartOutline className='h-6 w-6 text-black' />
            {cartItems.length > 0 && (
              <span className='absolute -top-2 -right-2 text-xs bg-black text-white px-1 rounded-full font-bold'>
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </Link>

          {/* Auth Buttons */}
          <SignedOut>
            <SignInButton className="text-sm bg-black text-white px-3 py-1 rounded hover:bg-gray-800 font-medium" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* Hamburger Menu */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-black text-2xl'>
              {menuOpen ? <BiX /> : <BiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden bg-white px-4 pt-4 pb-6 space-y-3 text-lg font-medium'>
          <NavLink to='/' onClick={toggleMenu} className='block hover:text-black text-gray-700'>Home</NavLink>
          <NavLink to='/products' onClick={toggleMenu} className='block hover:text-black text-gray-700'>Products</NavLink>
          <NavLink to='/about' onClick={toggleMenu} className='block hover:text-black text-gray-700'>About</NavLink>
          <NavLink to='/contact' onClick={toggleMenu} className='block hover:text-black text-gray-700'>Contact</NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
