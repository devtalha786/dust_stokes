import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';
import phone from '../../images/phone-img.png';
import { Container } from 'reactstrap';

export default function PhoneImg() {
  return (
    <div>
      <Container className='px-4 xl:px-0'>
        <div className='flex flex-col-reverse items-center justify-between py-10 mt-10 md:flex-row'>
          <div className='flex flex-col items-center justify-between w-full gap-y-10 md:w-1/2 md:flex-row'>
            <Link to={'/'}>
              <img
                src={phone}
                className='w-full md:w-[400px] lg:w-[500px] h-auto max-h-[602px] xl:max-h-[700px] mx-auto md:mx-0 fade-up-hover'
                alt=""
              />
            </Link>
          </div>
          <div className='flex flex-col items-center justify-center gap-y-6 w-full md:w-1/2'>
            <h6 className='text-[#E8D682]'>Ecosystem Smartphone</h6>
            <h1 className='text-white text-3xl md:text-4xl xl:text-6xl font-extrabold text-center mb-4'>
              NFT One
            </h1>
            <p className='text-[14px] md:text-[15px] xl:text-[17px] text-[#7b8996] text-center w-full md:w-4/5 lg:w-3/4 xl:w-2/3'>
              A revolutionary smartphone that allows users to mint tokens and enter the crypto world seamlessly.
            </p>
            <Link to={'/'}>
              <button className="px-4 text-sm rounded-3xl py-[13px] font-medium transition-all duration-300 text-black bg-[#E8D682] hover:bg-[#E8D682]">
                Discover NFT one
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
