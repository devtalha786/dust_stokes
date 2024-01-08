import React, { useEffect } from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';
import banner from '../../images/blockchainbanner.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BlockChain() {
  useEffect(() => {
    AOS.init({
      duration: 10000,
      once: true, // Animations only happen once
    });
  }, []);

  return (
    <div className='flex items-center justify-center w-full py-10 mb-5 md:mb-10 '>
      <div
        data-aos='fade-up'
        data-aos-offset='100'
        data-aos-delay='100'
        className='flex flex-col-reverse items-center justify-between w-full gap-y-10 md:w-[90%] lg:w-[82%] xl:w-[75%] md:gap-0 md:flex-row '
      >
        <div
          data-aos='fade-right'
          data-aos-offset='100'
          data-aos-delay='200'
          className='flex flex-col items-center md:items-start justify-center gap-y-8 w-full md:w-[50%]'
        >
          <h1 className='text-[white] text-3xl md:text-4xl xl:text-6xl font-extrabold text-gray-200'>
            NFT Blockchain
          </h1>
          <p className='text-[14px] lg:text-[15px] xl:text-[17px] text-[#7b8996] text-center w-[80%] sm:w-[60%] md:w-[74%] lg:w-[66%] phone-paragraph'>
            An independent blockchain boasting Smart Contract capabilities, dApps, and compatibility with the Ethereum Virtual Machine (EVM).
          </p>
          <Link to={'/'}>
            <button className="px-4 text-sm rounded-3xl py-[13px] font-medium transition-all duration-300 text-black bg-[#E8D682] hover:bg-[#E8D682]">
              Learn More
            </button>
          </Link>
        </div>
        <img
          data-aos='zoom-in'
          data-aos-offset='100'
          data-aos-delay='200'
          src={banner}
          className='lg:w-[456px] w-[196px] h-[154px] sm:w-[336px] sm:h-[264px] xl:w-[544px] lg:h-[358px] xl:h-[428px]'
          alt=""
        />
      </div>
    </div>
  );
}
