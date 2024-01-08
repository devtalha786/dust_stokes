import '../../index.css'
import { Link } from 'react-router-dom';
import img from '../../images/lic.png';
import img1 from '../../images/trade-img1.png';
import img2 from '../../images/trade-img2.png';
import img3 from '../../images/trade-img3.png';
import img4 from '../../images/trade-img4.png';


export default function Trade (){
  
  return (
    <div className='flex flex-col items-center justify-center w-full py-5 my-10 md:py-16 gap-y-2'>

    <h1 className=' text-[white] text-3xl md:text-4xl xl:text-6xl font-extrabold text-gray-200 text-center px-3 '><span className='text-[#E8D682]'>Trade</span> On</h1>
    <div className='flex flex-col items-center lg:flex-row gap-y-8 lg:gap-y-0  py-5 w-full   md:w-[85%] lg:w-[78%] xl:w-[77%] gap-x-6 xl:gap-x-10 justify-between px-3 '>
   
    <div className='border-[1px] border-[#1F2937] w-[95%] lg:w-[546px] rounded-3xl p-3 flex flex-col items-start justify-center '>
    <div className='flex items-center justify-between py-4 '>
        <img src={img} className=' h-[105px] xl:h-[128px]  w-[95px] xl:w-[121px]' alt="" />
        <div className='flex flex-col gap-y-3'>
            <h3 className='text-lg text-white '>NFT</h3>
            <h3 className='text-xl font-bold text-[#E8D682]'>$0.93201287</h3>
            <h3 className='text-gray-600'>24H Vol: $1,637,138.2</h3>
        </div>
    </div>
    <h4 className='pt-4 pb-2 text-left border-t border-gray-800 w-100 '>Trade On</h4>
        <div className='flex items-center justify-center '>
            <img src={img1} className='w-[27%] sm:w-[95px] xl:w-[121px]' alt="" />
            <img src={img2} className='w-[27%] sm:w-[95px] xl:w-[121px]' alt="" />
            <img src={img3} className='w-[27%] sm:w-[95px] xl:w-[121px]' alt="" />
            <img src={img4} className='w-[27%] sm:w-[95px] xl:w-[121px]' alt="" />
        </div>
    
    </div>    
    
    
    <div className='border-[1px] border-[#1F2937] w-[95%] lg:w-[546px] rounded-3xl p-3 flex flex-col items-start justify-center '>
    <div className='flex items-center justify-between py-4 '>
        <img src={img} className='h-[105px] xl:h-[128px]  w-[95px] xl:w-[121px]' alt="" />
        <div className='flex flex-col gap-y-3'>
            <h3 className='text-lg text-white '>NFT</h3>
            <h3 className='text-xl font-bold text-[#E8D682]'>$1.6110861</h3>
            <h3 className='text-gray-600'>24H Vol $11,263,633</h3>
        </div>
    </div>
    <h4 className='pt-4 pb-2 text-left border-t border-gray-800 w-100 '>Trade On</h4>
        <div className='flex items-center justify-center '>
            <img src={img1} className='w-[27%] sm:w-[95px] xl:w-[121px]' alt="" />
            <img src={img2} className='w-[27%] sm:w-[95px] xl:w-[121px]' alt="" />
            <img src={img3} className='w-[27%] sm:w-[95px] xl:w-[121px]' alt="" />
            <img src={img4} className='w-[27%] sm:w-[95px] xl:w-[121px]' alt="" />
        </div>
    
    </div>  


    
    </div>
    <Link to={'/'}>
        <button className=" px-4 text-sm rounded-3xl py-[13px] font-medium transition-all duration-300 text-black bg-[#E8D682] hover:bg-[#E8D682] ">
        Explore All
        </button>
        </Link>    
    </div>
  )
}

