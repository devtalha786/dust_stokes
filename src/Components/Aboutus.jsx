import { Link } from 'react-router-dom';
import About from '../images/second.jpeg'
import One from '../images/first.jpeg'
import Two from '../images/second.jpeg'
import Three from '../images/third.jpeg'
import Four from '../images/four.jpeg'
import Five from '../images/five.jpeg'
import Six from '../images/six.jpeg'
import Seven from '../images/seven.jpeg'
import Eight from '../images/eight.jpeg'
import { Col, Container, Row } from 'reactstrap';


export default function AboutUs(props) {
    return (
        <>

            <Container>
                <main className="block text-center mt-[140px] overflow-hidden ">

                    <h2 className="text-[50px] font-extrabold text-[monospace] text-center text-[#E8D682] ">About Us</h2>
                    <p className="text-[17px] text-[serif] text-[white]">Duststroke is a dynamic and innovative company dedicated to redefining.
                    </p>
                    <Link to={'/'}>
                        <button id="gohome" className="border-[#E8D682] py-[10px] px-[20px] bg-[#E8D682] rounded-[7px] mt-[5%] text-[white] text-[900] bg-[transparent]">Go Back Home</button>
                    </Link>
                </main>
                <div>
                    <Container>
                        <Row className="mt-8 md:mt-16">
                            <Col md={6} lg={4}>
                                <img
                                    src={About}
                                    className='mx-auto rounded-8 h-auto w-full'
                                    alt="About Image"
                                />
                            </Col>
                            <Col md={6} lg={8}>
                                <div className='mt-8'>
                                    <h2 className='text-white px-4 sm:text-center md:text-start lg:text-start text-4xl md:text-5xl lg:text-6xl'>
                                        DIGITAL NFT <span className='text-[#E8D682]'>A New Era</span>
                                    </h2>
                                    <p className='text-white px-4 md:mx-1 text-base md:text-lg md:max-w-4/5 mt-1 text-justify'>
                                        Duststroke is a dynamic and innovative company dedicated to redefining the standards of excellence in various industries. Committed to creativity and
                                        cutting-edge solutions, we strive to make a lasting impact through our products and services. Our team of passionate professionals works tirelessly
                                        to deliver quality and value, ensuring the success of our clients and partners.
                                    </p>
                                    <div>
                                        <button className='ml-4 mx-4 md:ml-2 px-4 py-2 bg-[#E8D682] rounded-md mt-4 text-monospace'>
                                            Explore
                                        </button>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <main className='mt-[105px]'>
                    <h2 className=' text-[900] text-[30px] md:text-[35px] lg:text-[40px] text-white text-center'>We Have <span className='text-[#E8D682]'>Largest Collection</span></h2>
                </main>
                <Container>
                    <Row className="mt-8">
                        <Col xs={12} sm={6} md={3}>
                            <div className="tile" data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="100">
                                <a className="tile-link" href="">
                                    <img className="tile-img tile-img2" src={Four} alt="Image" />
                                </a>
                            </div>
                        </Col>

                        <Col xs={12} sm={6} md={3}>
                            <div className="tile" data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="100">
                                <a className="tile-link" href="">
                                    <img className="tile-img tile-img2" src={Two} alt="Image" />
                                </a>
                            </div>
                        </Col>

                        <Col xs={12} sm={6} md={3}>
                            <div className="tile" data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="100">
                                <a className="tile-link" href="">
                                    <img className="tile-img tile-img2" src={Eight} alt="Image" />
                                </a>
                            </div>
                        </Col>

                        <Col xs={12} sm={6} md={3}>
                            <div className="tile" data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="100">
                                <a className="tile-link" href="">
                                    <img className="tile-img tile-img1" src={Six} alt="Image" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}