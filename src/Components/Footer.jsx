import React from 'react'
import logo from '../images/LogoStarDustStroke.png'
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaSquareYoutube,
  FaTelegram
} from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
export default function Footer() {
  return (


    <div>

      {/*  This is the first div of the footer links */}
      <div className='md:flex text-center md:text-left justify-between lg:mx-[70px] mt-[140px]'>

        {/* THis div is for logo */}

        <div>
          <img
            src={logo}
            alt='footer logo'
            className='w-[130px] top-2 mx-auto' />
        </div>

        {/* This div is for LFi  */}
        <div className='lg:text-left md:text-center'>
          <h1 className=' text-[20px] text-white py-3'>NFT</h1>
          <ul>
            <li className='footer-links'>NFT One</li>
            <li className='footer-links'>Minting Machine</li>
            <li className='footer-links'>Blockchain</li>
            <li className='footer-links'>Tokens</li>
            <li className='footer-links'>Ecosystem</li>
          </ul>
        </div>

        {/* This div is for dApps */}
        <div className='lg:text-left md:text-center'>
          <h1 className=' text-[20px] text-white py-3'>dApps</h1>
          <ul>
            <li className='footer-links'>L-DAO</li>
            <li className='footer-links'>Bridge</li>
            <li className='footer-links'>Launchpad</li>
            <li className='footer-links'>Software Wallet</li>
          </ul>
        </div>

        {/* This div is for Company */}
        <div className='lg:text-left md:text-center'>
          <h1 className=' text-[20px] text-white py-3'>Company</h1>

          <ul>
            <li className='footer-links'>Docs</li>
            <li className='footer-links'>Legal</li>
            <li className='footer-links'>White Paper</li>
            <li className='footer-links'>Technical Docs</li>
            <li className='footer-links'>Roadmap</li>
            <li className='footer-links'>FAQ</li>
          </ul>
        </div>

        {/*This div is for Contact us */}
        <div className='lg:text-left md:text-center'>
          <h1 className=' text-[20px] text-white py-3'>Contact us</h1>
          <ul>
            <li className='footer-links'>Help & Support</li>
          </ul>

          <h1 className='text-[20px] text-white py-3'>Social Media accounts</h1>
          <ul className='flex items-center justify-center my-4'>
            <FaXTwitter
              size={25}
              className='mr-2 hover:text-[#E8D682] hover:cursor-pointer text-[#BABDBC]' />
            <FaFacebook
              size={25}
              className='mx-2 hover:text-[#E8D682] hover:cursor-pointer text-[#BABDBC]' />
            <FaInstagram
              size={25}
              className='mx-2 hover:text-[#E8D682] hover:cursor-pointer text-[#BABDBC]' />
            <BsLinkedin
              size={25}
              className='mx-2 hover:text-[#E8D682] hover:cursor-pointer text-[#BABDBC]' />
            <FaSquareYoutube
              size={25}
              className='mx-2 hover:text-[#E8D682] hover:cursor-pointer text-[#BABDBC]' />
            <FaTelegram
              size={25}
              className='mx-2 hover:text-[#E8D682] hover:cursor-pointer text-[#BABDBC]' />
          </ul>
        </div>

      </div>

      {/* This is the second div of the footer */}

      <div className='md:flex justify-between md:mx-[35px] lg:mx-[75px] mt-10'>
        <div>
          <h1 className='text-sm text-[#BABDBC] text-center my-4'>© 2023 NFT | All Rights Reserved</h1>
        </div>

        <ul className='text-center md:flex'>
          <li className='text-[12px] md:mx-2 lg:mx-4 my-2 hover:text-[#E8D682] hover:cursor-pointer text-[#BABDBC]'>Tax decleration</li>
          <li className='text-[12px] md:mx-2 lg:mx-4 my-2 hover:text-[#E8D682] hover:cursor-pointer text-[#BABDBC]'>Terms</li>
          <li className='text-[12px] md:mx-2 lg:mx-4 my-2 hover:text-[#E8D682] hover:cursor-pointer text-[#BABDBC]'>Privacy & Cookies</li>
          <li className='text-[12px] md:mx-2 lg:mx-4 my-2 hover:text-[#E8D682] hover:cursor-pointer text-[#BABDBC]'>Risk Disclamer</li>
          <li className='text-[12px] md:mx-2 lg:mx-4 my-2 hover:text-[#E8D682] hover:cursor-pointer text-[#BABDBC]'>Delivery Warranty</li>
        </ul>
      </div>

      {/* Third row of the footer div */}

      <div>
        <p className='text-[12px] text-[#BABDBC] text-center mb-[22px] mx-[18px]'>Actual product may slightly vary in design, color and size. Please read the description of the product for complete understanding of its specifications.</p>
      </div>
    </div>


  )
}
