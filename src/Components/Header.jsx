import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/LogoStarDustStroke.png';
import { IoIosMenu } from 'react-icons/io';

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenu = (e) => {
    e.stopPropagation(); // Stop the event propagation
    setMenuToggle(!menuToggle);
  };

  useEffect(() => {
    // Close the menu when the user clicks outside of it
    const closeMenu = () => {
      if (menuToggle) {
        setMenuToggle(false);
      }
    };

    window.addEventListener('click', closeMenu);
    return () => {
      window.removeEventListener('click', closeMenu);
    };
  }, [menuToggle]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.querySelector('.header-container').offsetHeight; // Adjust this if necessary
      const offset = section.offsetTop - headerHeight;
  
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
  
      setMenuToggle(false); // Close the menu after clicking on a section link
    }
  };

  return (
    <>
      <div className={`${menuToggle ? 'h-[347px] ' : 'h-[110px] '} fixed z-10 overflow-hidden transition-all duration-500 bg-[#070A0B] w-full  top-0`}>
        <header className='container flex items-center justify-between px-14 header-container'>
          <Link to={'/'}>
            {' '}
            <img src={logo} className='h-[110px] ' />
          </Link>
          <div className='flex items-center text-gray-100 transition-all duration-300'>
            <ul className='items-center hidden mr-4 gap-x-8 lg:flex'>
              <li onClick={() => scrollToSection('home')} className='hover:text-[#E8D682] cursor-pointer'>
                Home
              </li>
              <li onClick={() => scrollToSection('about-us')} className='hover:text-[#E8D682] cursor-pointer'>
                About
              </li>
              <li onClick={() => scrollToSection('project-overview')} className='hover:text-[#E8D682] cursor-pointer'>
                Project Overview
              </li>
              <li onClick={() => scrollToSection('tokenomics')} className='hover:text-[#E8D682] cursor-pointer'>
                Tokenomics
              </li>
              <li onClick={() => scrollToSection('road-map')} className='hover:text-[#E8D682] cursor-pointer'>
                Roadmap
              </li>
              <li onClick={() => scrollToSection('contact-us')} className='hover:text-[#E8D682] cursor-pointer'>
                Contact
              </li>
            </ul>
            <Link to={'/'}>
              <button className='px-4 text-sm rounded-3xl py-[13px] font-medium transition-all duration-300 text-black bg-[#E8D682] hover:bg-[#E8D682] '>
                Go To App
              </button>
            </Link>
            <IoIosMenu onClick={handleMenu} size={34} className='block ml-2 cursor-pointer lg:hidden' />
          </div>
        </header>
        <ul className={`text-gray-100 flex flex-col items-start w-full p-3 gap-y-3 border-b border-white `}>
          <li onClick={() => scrollToSection('home')} className='hover:text-[#E8D682] cursor-pointer'>
            Home
          </li>
          <li onClick={() => scrollToSection('about-us')} className='hover:text-[#E8D682] cursor-pointer'>
            About
          </li>
          <li onClick={() => scrollToSection('project-overview')} className='hover:text-[#E8D682] cursor-pointer'>
            Project Overview
          </li>
          <li onClick={() => scrollToSection('tokenomics')} className='hover:text-[#E8D682] cursor-pointer'>
            Tokenomics
          </li>
          <li onClick={() => scrollToSection('road-map')} className='hover:text-[#E8D682] cursor-pointer'>
            Roadmap
          </li>
          <li onClick={() => scrollToSection('contact-us')} className='hover:text-[#E8D682] cursor-pointer'>
            Contact
          </li>
        </ul>
      </div>
    </>
  );
}
