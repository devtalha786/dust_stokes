import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';
import banner from '../../images/blockchainbanner.png';


export default function OurMission() {
  return (
    <div className='flex flex-col items-center justify-center w-full px-3 py-10 mb-5 md:mb-10 '>
      <div
        className='flex flex-col items-center justify-between w-full gap-y-10 md:w-[90%] lg:w-[78%] xl:w-[60%] md:gap-0 md:flex-row border-left p-[50px]'
      >
        <div className='flex flex-col items-center justify-center w-[60%] hover-animation'>
          <h1 className='text-[white] text-3xl md:text-4xl xl:text-6xl font-bold text-gray-200'>
            <span className='text-[18px] font-normal'>Our</span>
            <br />
            Vision
          </h1>
        </div>

        <p className='text-[14px] lg:text-[15px] xl:text-[17px] text-[#7b8996] text-center w-[100%] sm:w-[60%] md:w-[74%] phone-paragraph'>
          An independent blockchain boasting Smart Contract capabilities, dApps and compatibility with the Ethereum Virtual
          Machine NFT.
        </p>
      </div>

      <div
        className='flex flex-col-reverse items-center justify-between w-full gap-y-10 md:w-[90%] lg:w-[78%] xl:w-[60%] md:gap-0 md:flex-row border-right p-[50px]'
      >
        <p className='text-[14px] lg:text-[15px] xl:text-[17px] text-[#7b8996] text-center w-[100%] sm:w-[60%] md:w-[74%] phone-paragraph'>
          An independent blockchain boasting Smart Contract capabilities, dApps and compatibility with the Ethereum Virtual
          Machine NFT.
        </p>
        <div className='flex flex-col items-center justify-center w-[60%] hover-animation'>
          <h1 className='text-[white] text-3xl md:text-4xl xl:text-6xl font-bold text-gray-200'>
            <span className='text-[18px] font-normal'>Became</span>
            <br />
            Mission
          </h1>
        </div>
      </div>
      <Link to={'/'} className='mt-4'>
        <button className="px-4 text-sm rounded-3xl py-[13px] font-medium transition-all duration-300 text-black bg-[#E8D682] hover:bg-[#E8D682]">
          EcoSystem
        </button>
      </Link>
    </div>
  );
}
