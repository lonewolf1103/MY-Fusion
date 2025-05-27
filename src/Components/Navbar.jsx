import React, { useState } from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { BiMenu, BiX } from 'react-icons/bi';
import { IoCartOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  const navLinkClasses = ({ isActive }) =>
    `${isActive ? 'text-white border-b-2 border-white' : 'text-gray-300'} hover:text-white transition-all`;

  return (
    <header className='bg-black text-white py-4 shadow-md fixed top-0 w-full z-50'>
      <div className='max-w-6xl mx-auto flex items-center justify-between px-4'>

        {/* Logo */}
        <Link to='/'>
          <h1 className='text-2xl font-bold tracking-wide'>
            <span className='text-white'>MY</span><span className='text-gray-400'> Fusion</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex gap-8 text-lg font-medium items-center'>
          <NavLink to='/' className={navLinkClasses}>Home</NavLink>
          <NavLink to='/products' className={navLinkClasses}>Products</NavLink>
          <NavLink to='/about' className={navLinkClasses}>About</NavLink>
          <NavLink to='/contact' className={navLinkClasses}>Contact</NavLink>
        </nav>

        {/* Right Side Icons */}
        <div className='flex items-center gap-4'>

          {/* Cart */}
          <Link to='/cart' className='relative'>
            <IoCartOutline className='h-6 w-6 text-white' />
            <span className='absolute -top-2 -right-2 text-xs bg-white text-black px-1 rounded-full font-bold'>0</span>
          </Link>

          {/* Auth Buttons */}
          <SignedOut>
            <SignInButton className="text-sm bg-white text-black px-3 py-1 rounded hover:bg-gray-200 font-medium" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* Hamburger Menu */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white text-2xl'>
              {menuOpen ? <BiX /> : <BiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden bg-black px-4 pt-4 pb-6 space-y-3 text-lg font-medium'>
          <NavLink to='/' onClick={toggleMenu} className='block hover:text-white text-gray-300'>Home</NavLink>
          <NavLink to='/products' onClick={toggleMenu} className='block hover:text-white text-gray-300'>Products</NavLink>
          <NavLink to='/about' onClick={toggleMenu} className='block hover:text-white text-gray-300'>About</NavLink>
          <NavLink to='/contact' onClick={toggleMenu} className='block hover:text-white text-gray-300'>Contact</NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
