import '../index.css'
// import logo from '../images/LogoStarDustStroke.png'
// import nft from '../images/nf.jpg'
// import One from '../images/first.jpeg'
// import Two from '../images/second.jpeg'
// import Three from '../images/third.jpeg'
// import Four from '../images/four.jpeg'
// import Five from '../images/five.jpeg'
// import Six from '../images/six.jpeg'
// import Seven from '../images/seven.jpeg'
// import Eight from '../images/eight.jpeg'
import Hero from './Home/Hero'
import TopMediaFeatures from './Home/TopMediaFeatures'
import PhoneImg from './Home/PhoneImg'
import MintingMachine from './Home/MintingMachine'
import BlockChain from './Home/BlockChain'
import DApps from './Home/DApps'
import Tokens from './Home/Tokens'
import Trade from './Home/Trade'
import OurMission from './Home/OurMission'
import AboutUs from './Aboutus'
import ProjectOverview from './ProjectOverview'
import Tokenomics from './Tokenomics'
import { Container } from 'reactstrap'
import ContactUs from './ContactUs'
import Roadmap from './Roadmap'
export default function Home(props) {

    return (
        <>
            {props.header}
            <Container>
                <section id="home">
                    <Hero />
                    {/* <TopMediaFeatures /> */}
                    <PhoneImg />
                    {/* <MintingMachine /> */}
                    <BlockChain />
                    {/* <DApps /> */}
                    <Tokens />
                    <Trade />
                    <OurMission />
                </section>

                <section id="about-us">
                    < AboutUs />
                </section>
                <section id="project-overview">
                    <ProjectOverview />
                </section>
                <section id="tokenomics">
                    <Tokenomics />
                </section>
                <section id="road-map">
                    <Roadmap />
                </section>
                <section id="contact-us">
                    <ContactUs />
                </section>
                {props.Footer}
            </Container>

        </>
    );
}