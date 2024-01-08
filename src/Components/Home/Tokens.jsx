import '../../index.css'
import { Link } from 'react-router-dom';
import token from '../../images/nft-img.png';

export default function Tokens (){
    const cards = 
    [
        {
            id: 0,
            title: 'NFT',
            para: 'NFT is the native token of the NFT ecosystem that provides users the access to the network’s services.',
        },
        {
            id: 1,
            title: 'NFT',
            para: 'NFT holders will receive rewards, obtain discounts, get wider allocations in launchpad, and more.',
        },
        {
            id: 2,
            title: 'NFT',
            para: 'NFT is the collateral token of NFT ecosystem, which allows users to participate in the Proof-of-coverage minting.',
        },
       
        
    ]
  return (
    <div className='flex flex-col items-center justify-center w-full py-5 my-10 md:py-16 gap-y-2'>

    <h1 className=' text-[white] text-3xl md:text-4xl xl:text-6xl font-extrabold text-gray-200 text-center px-3 '>NFT <span className='text-[#E8D682]'>Tokens</span></h1>
    <div className='flex flex-col items-center md:flex-row gap-y-8 md:gap-y-0  py-5 w-full  md:w-[80%] flex gap-x-4 lg:gap-x-6 xl:gap-x-10 justify-content-center '>
       {cards.map((item) =>( <div  key={item.id} className='border-[1px] border-gray-700 flex flex-col items-center justify-center gap-y-3 w-[90%] md:w-[326px] pb-10 px-[5px]  pt-[10px]  hover:border-[#E8D682] hover:bg-[#141414] transition-all duration-300 rounded-3xl flex items-center justify-center  ' data-aos='fade-up' data-aos-offset='100' data-aos-delay='100'>
            <img src={token} className='h-[134px] w-[134px] rounded-full' alt="" />
            <h3 className='text-3xl font-semibold text-white '>{item.title}</h3>
            <p className=' text-[#7b8996] text-center'>{item.para}</p>
        </div>
        ))}
    </div>
    <Link to={'/'}>
        <button className=" px-4 text-sm rounded-3xl py-[13px] font-medium transition-all duration-300 text-black bg-[#E8D682] hover:bg-[#E8D682] ">
        Explore All
        </button>
        </Link>    
    </div>
  )
}

