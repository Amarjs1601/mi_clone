
import './App.css';
import Navbar from './component/Navbar.js';
import PreNavbar from './component/PreNavbar';
import {BrowserRouter as Router,Route} from "react-router-dom"
import Slider from './component/Slider.js';
import data from "./data/data.json";
import Offers from './component/Offers.js';
import Offer from './component/Offer.js';
import Heading from './component/Heading.js';
import StarProduct from './component/StarProduct.js'
import HotAccessoriesMenu from './component/HotAccessoriesMenu';
import HotAccessories from './component/HotAccessories.js';



function App() {
  return (
    <Router >
     <PreNavbar />
    <Navbar />
    <Slider start={data.banner.start} />
    <Offers offer={data.offer} />  
    <Offer />
    <Heading text="STAR PRODUCTS" />
    <StarProduct starProduct={data.starProduct}/>
    <Heading text="HOT ACCESSORIES" />
    <HotAccessoriesMenu />
 
   
   
    </Router>
  );
}

export default App;
