import { BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Tokenomics from './Components/Tokenomics';
import Header from './Components/Header';
import AboutUs from './Components/Aboutus';
import Roadmap from './Components/Roadmap';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import ProjectOverview from './Components/ProjectOverview';
import Aos from "aos";
import 'aos/dist/aos.css';
import ScrollLoadingBar from './Components/Global/Loading';

function App() {
   if (typeof window !== "undefined") {
    // aos initialization
    Aos.init({
      duration: 2500,
      delay: 400
    });
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route  exact path="/" element={<Home Footer={<Footer/>} header={<Header/>}/>}/>
        {/* <Route exact path='/tokenomics' element={<Tokenomics Footer={<Footer/>} header={<Header/>}/>}/> */}
        {/* <Route exact path='/about-us' element={<AboutUs Footer={<Footer/>} header={<Header/>}/>}/> */}
        {/* <Route exact path='/road-map' element={<Roadmap Footer={<Footer/>} header={<Header/>}/>}/> */}
        {/* <Route exact path='/contact-us' element={<ContactUs Footer={<Footer/>} header={<Header/>}/>}/> */}
        <Route exact path='/project-overview' element={<ProjectOverview Footer={<Footer/>} header={<Header/>}/>}/>
      </Routes>
      <ScrollLoadingBar/>
    </BrowserRouter>
  );
}

export default App;
