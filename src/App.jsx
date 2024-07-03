import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Product from './Product';
import Service from './Service';
import AboutUs from './Components/About/AboutUs';
import Career from './Components/About/Career';
import TraineeForm from './Components/About/TraineeForm';
import ExperienceJoineeForm from './Components/About/ExperienceJoineeForm';
import Blogs from './Components/Blogs/Blogs';
import MobileBlog from './Components/Blogs/MobileApp';
import SeoManagement from './Components/Blogs/SeoManagement';
import EcommerceBlog from './Components/Blogs/EcommerceBlog';
import LinkingBlog from './Components/Blogs/LinkingBlog';
import FutureTech from './Components/Blogs/FutureTech';
import ReactBlog from './Components/Blogs/ReactBlog';
import LaravelBlog from './Components/Blogs/LaravelBlog';
import DigitalMarketing from './Components/Blogs/DigitalMarketing';
import CyberSecurity from './Components/Blogs/CyberSecurity';
import CryptoBlog from './Components/Blogs/CryptoBlog';
import Case_Study from './Components/CaseStudy/CS';
import Web from './Web';
import Cloud from './Cloud';
import Data from './Data';
import Dedicated from './Dedicated';
import Design from './Design';
import Figma from './Figma';
import Commerce from './Product2';
import Digital2 from './Digital2';
import Web4 from './Web4';
import Urfine from './Urfine';
import AI from './AI';
import Mobile1 from './Mobile1';
import Web1 from './Web1';
import Ux from './Ux';
import Digitalmarketing from './Digitalmarketing';
import Fresh from './Fresh';
import Team11 from './Team11';
import ScrollToTop from './ScrolltoTop';
import Loader from './Loader';
import CircleLoader from "react-spinners/CircleLoader";
// import Movikat from './Movikat2'
import Movikat2 from './Movikat2'
import MakeYourTrip from './MakeYourTrip';
import GoHotel from './GoHotel';
import MultiService from './MultiService';
import DailyBills from './DailyBills';
import HomeC from './HomeC';
import Foodo from './Foodo';
import BellStore from './BellStore';
import Brobo from './Components/Brobo'
import GoConnect from './Components/GoConnect';
import DesiGro from './Components/DesiGro';
import Lln from './Components/Lln';
import Online from './Components/Online';
import Coupon from './Components/Coupon';
import MazaMunch from './Components/MazaMunch';
import Shri from './Components/Shri';
import Truely from './Components/Truely';
import One from './Components/One';
import Yml from './Components/Yml';
import Dcart from './Components/Dcart';


function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    setLoading(true);

    
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [location]);
  useEffect(() => {
    if (loading) {
      document.body.classList.add('loading-background');
    } else {
      document.body.classList.remove('loading-background');
    }
  }, [loading]);

  return (
    <>
      {loading?
      <div className='loader-container'>
       <CircleLoader
       color={'red'}
       loading={loading}

       size={90}
      
     />
     </div>
  :
      <Routes>
        <Route path='/blog' element={<Blogs />} />
        <Route path="/blogs/mobileApplicationBlog" element={<MobileBlog />} />
        <Route path="/blogs/seoManagementBlog" element={<SeoManagement />} />
        <Route path="/blogs/scratchEcommerceBlog" element={<EcommerceBlog />} />
        <Route path="/blogs/internalLinkingBlog" element={<LinkingBlog />} />
        <Route path="/blogs/futureTechBlog" element={<FutureTech />} />
        <Route path="/blogs/reactBlog" element={<ReactBlog />} />
        <Route path="/blogs/laravelBlog" element={<LaravelBlog />} />
        <Route path="/blogs/digitalMarketingBlog" element={<DigitalMarketing />} />
        <Route path="/blogs/cyberSecurityBlog" element={<CyberSecurity />} />
        <Route path="/blogs/cryptoMarketBlog" element={<CryptoBlog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/career-with-us" element={<Career />} />
        <Route path="/traineeForm" element={<TraineeForm />} />
        <Route path="/experienceJoineeForm" element={<ExperienceJoineeForm />} />
        <Route path="/our-work" element={<Case_Study />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/delicious-meals-delivery" element={<Product />} />
        <Route path="/service/:id" element={<Service />} />
        <Route path="/web" element={<Web />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/data" element={<Data />} />
        <Route path="/dedicated" element={<Dedicated />} />
        <Route path="/design" element={<Design />} />
        <Route path="/figma" element={<Figma />} />
        <Route path="/bellway-grocery" element={<Commerce />} />
        <Route path="/digital2" element={<Digital2 />} />
        <Route path="/web4" element={<Web4 />} />
        <Route path="/artificial-intelligence" element={<AI />} />
        <Route path="/mobile-application-development" element={<Mobile1 />} />
        <Route path="/web-application-development" element={<Web1 />} />
        <Route path="/ux-ui-design" element={<Ux />} />
        <Route path='/digital-marketing' element={<Digitalmarketing />} />
        <Route path='/fresh-and-red-delivery' element={<Fresh />} />
        <Route path='/urfine' element={<Urfine />} />
        <Route path='/team11' element={<Team11 />} />
        <Route path ='/foodo' element ={<Foodo/>}/>
        <Route path ='/home-C' element ={<HomeC/>}/>
        <Route path ='/make-your-trip' element ={<MakeYourTrip/>}/>
        <Route path ='/go-hotel' element ={<GoHotel/>}/>
        <Route path ='/multi-service' element ={<MultiService/>}/>
        <Route path ='/daily-bills' element ={<DailyBills/>}/>
        <Route path ='/movikat' element ={<Movikat2/>}/>
        <Route path ='/bell-store' element ={<BellStore/>}/>
        <Route path ='/brobo' element ={<Brobo/>}/>
        <Route path ='/desigro' element ={<DesiGro/>}/>
        <Route path ='/goconnect' element ={<GoConnect/>}/>
        <Route path ='/lln' element ={<Lln/>}/>
        <Route path ='/online-store-web' element ={<Online/>}/>
        <Route path ='/coupon-counter' element ={<Coupon/>}/>
        <Route path ='/maza-munch' element ={<MazaMunch/>}/>
        <Route path ='/shri-jyotish' element ={<Shri/>}/>
        <Route path ='/truely-match' element ={<Truely/>}/>
        <Route path ='/oneapp-plus' element ={<One/>}/>
        <Route path ='/yml-mart' element ={<Yml/>}/>
        <Route path ='/dcart' element ={<Dcart/>}/>
      </Routes>
      
}
    </>
  );
}
export default App;
