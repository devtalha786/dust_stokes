import '../../index.css'
import { Link } from 'react-router-dom';
import banner from '../../images/blockchainbanner.png'



export default function DApps (){
  return (
    <div className='flex items-center justify-center w-full px-2 py-10 mb-5 md:mb-10'>
       <div className='flex flex-col py-16 items-center border-3 rounded-3xl border-[#E8D682] justify-center  gap-y-10  lg:w-[65%]  xl:w-[70%]  '>
       <h6><span className='text-[#E8D682]'>NFT</span> Blockchain</h6>
            <h1 className=' text-[white] text-[60px] sm:text-[95px] md:text-[120px] lg:text-[150px] xl:text-[200px] font-extrabold text-center '>dApps</h1>
            <p className=' text-[14px] lg:text-[15px] xl:text-[17px]  text-[#7b8996] text-center w-[80%] sm:w-[60%] md:w-[50%] '>Decentralized applications running on our own proprietary LFi Blockchain and public networks.</p>
            <Link to={'/'}>
        <button className=" px-4 text-sm rounded-3xl py-[13px] font-medium transition-all duration-300 text-black bg-[#E8D682] hover:bg-[#E8D682] ">
        Learn More
        </button>
        </Link>    
       </div>
    </div>
  )
}
