import LIC from '../images/four.jpeg'
import '../index.css'
import Nft1 from '../images/second.jpeg'
import Nft2 from '../images/eight.jpeg'
import Nft3 from '../images/four.jpeg'
import Nft4 from '../images/six.jpeg'
import { Container } from 'reactstrap'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Tokenomics(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                },
            },
        ],
    };

    return (
        <>
     
            <Container>
                <div className='mt-[140px]'>
                <h2 className="text-[50px] font-extrabold text-[monospace] text-center text-[#E8D682] ">Tokenomics</h2>
                    <main className='flex flex-wrap justify-center gap-x-[100px] gap-y-[50px] mt-[11%]'>
                   
                        <div className="block float-left w-[30%] mt-[7%]" id='token-main'
                            data-aos='fade-right' data-aos-offset='100' data-aos-delay='100'>
                            <h2 className="text-[#E8D682] text-justify text-[40px] text-[900] my-3">NFT Token</h2>
                            <p className="text-[white] text-justify py-[3%] text-[17px] text-[900]">NFT, or Non-Fungible Token,
                                is a type of digital asset that represents ownership or proof of authenticity of a unique item or piece of content using blockchain technology. </p>
                            <button className='bg-[#E8D682] rounded-[6px] text-[#111112] mt-[2.7%] mx-[5px] py-[4px] px-[26px] text-[900] text-[21px]'>Buy</button>
                            <button className='bg-[grey] rounded-[7px] text-[white] mt-[10px] md:ml-[3%] py-[4px] px-[15px] text-[900] text-[21px] '>More About</button>
                        </div>
                        <img src={LIC} className='float-right rounded-[20px] px-[10px] w-[290px] md:w-[390] lg:w-[400px]'
                            data-aos='fade-left' data-aos-offset='100' data-aos-delay='100' />
                    </main>

                    <div className='flex flex-wrap justify-center gap-x-[30px] w-[100%] mt-[40px] '>
                        <h2 className='text-[white] text-[900] text-[25px] my-3 md:text-[38px] lg:text-[47px] float-left'>NFT's <span className=' text-[#E8D682]'>Collection</span></h2>
                        <p className='text-[white] text-[900] text-justify text-[17px] float-right mx-[35px] md:mx-[5px] md:w-[50%]'>At Duststroke, we are driven by a singular mission — to empower individuals and communities to build their independence in a rapidly evolving digital landscape.
                            We believe in the transformative potential of blockchain technology and its capacity to redefine the way we interact, transact, and create.</p>
                    </div>
                    <hr className='border-b border-green-500 w-[15%] mx-[16.8%]' />
                    <Container>
                        <div className="slider-container mt-5">
                            <Slider {...settings}>
                                <div className="slider-item">
                                    <img src={Nft1} alt="NFT 1" className="slider-image" />
                                </div>
                                <div className="slider-item">
                                    <img src={Nft2} alt="NFT 2" className="slider-image" />
                                </div>
                                <div className="slider-item">
                                    <img src={Nft3} alt="NFT 3" className="slider-image" />
                                </div>
                                <div className="slider-item">
                                    <img src={Nft4} alt="NFT 4" className="slider-image" />
                                </div>
                            </Slider>
                        </div>

                    </Container>


                    <div className='md:flex  justify-center md:gap-x-[30px] w-[100%] mt-[80px] mb-[30px] '>

                        <h2 className='text-[white] text-center my-3 text-[900] text-[25px] md:text-[38px] lg:text-[47px]  '>NFT's <span className=' text-[#E8D682]'> SDS</span></h2>

                        <p className='text-[white]  text-[900] text-[17px] mx-[35px] md:mx-[5px] md:w-[50%]'>At Duststroke, we are driven by a singular mission — to empower individuals and communities to build their independence in a rapidly evolving digital landscape.
                            We believe in the transformative potential of blockchain technology and its capacity to redefine the way we interact, transact, and create.</p>
                    </div>
                </div>
            </Container>
        </>
    );
}