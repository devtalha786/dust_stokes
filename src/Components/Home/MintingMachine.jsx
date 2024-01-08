import '../../index.css'
import { Link } from 'react-router-dom';
import machine from '../../images/minting-machine.png'


export default function MintingMachine (){

  return (
    <div className='flex flex-col items-center justify-center w-full py-5 my-10 md:py-16 gap-y-6'>
         <h1 className=' text-[white] text-3xl md:text-4xl xl:text-6xl font-extrabold text-gray-200 text-center px-3 '><span className='text-[#E8D682]'>NFT</span> Minting Machine</h1>
         <p className=' text-[14px] lg:text-[15px] xl:text-[17px]  text-[#7b8996] text-center w-[75%] md:w-[50%] '>Beyond our products, we prioritize education. We aim to demystify blockchain and empower users
                        with the knowledge they need to navigate the decentralized landscape confidently.</p>
        <img src={machine} alt="" className='w-[86%] md:w-[78%] mt-8 md:mt-16 '/>
        <Link to={'/'}>
        <button className=" px-4 text-sm rounded-3xl py-[13px] font-medium transition-all duration-300 text-black bg-[#E8D682] hover:bg-[#E8D682] ">
        Learn More
        </button>
        </Link>    
    </div>
  )
}

