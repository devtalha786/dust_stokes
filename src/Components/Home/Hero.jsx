import { Container } from 'reactstrap';
import '../../index.css'
import { Link } from 'react-router-dom';



export default function Hero() {

    return (
        <>
            <div>
                <Container>
                    <div className=' mt-[140px] home-hero-section justify-center items-center w-full flex py-10 md:py-32 px-1 mb-5 md:mb-10'>
                        <div className='flex flex-column items-center justify-center w-[100%] md:w-[80%] lg:w-[60%]  xl:w-[40%]  gap-y-6' data-aos='fade-up' data-aos-offset='100' data-aos-delay='100'>
                            <h1 className=' text-[white] text-3xl md:text-4xl xl:text-6xl font-extrabold text-gray-200 text-center px-3 '> Welcome To The World Of <span className='text-[#E8D682]'>NFT's</span></h1>
                            <p className=' text-[14px] lg:text-[15px] xl:text-[17px]  text-[#7b8996] text-center  '>Beyond our products, we prioritize education. We aim to demystify blockchain and empower users
                                with the knowledge they need to navigate the decentralized landscape confidently.</p>
                            <Link to={'/'}>
                                <button className=" px-4  md:px-3 text-sm rounded-3xl py-2  md:py-[13px] font-medium transition-all duration-300 text-black bg-[#E8D682] hover:bg-[#E8D682] ">
                                    Learn More
                                </button>
                            </Link>
                        </div>

                    </div>
                </Container>
            </div>


        </>
    );
}