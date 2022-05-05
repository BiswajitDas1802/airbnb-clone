
import './App.css';
import {Host} from "./components/Homepage/Become_a_host/Host"
import { Homepage } from './components/Homepage/LandingPage/Homepage';
import { MapwithHotels } from './components/Mapwithhotels/MapwithHotels';
import {Routes , Route} from 'react-router-dom'
import { BookHotel } from './components/BookHotel/BookHotel';
import Payment from './components/Payment/Payment';
import { Superhost } from './components/Superhost/Superhost';

import { Singup } from './components/Homepage/LoginSignup/Signup';
import {Footer } from './components/Homepage/Footer/footer'
// import {Experience } from './components/Experience/Experience'



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route  path="/search" element={<MapwithHotels/>}/>
        <Route path="bookhotel" element={<BookHotel/>}/>
        <Route path="/become-a-host" element={<Host/>}/>
        <Route path = "/payment" element={<Payment/>}/>
        <Route path = "/superhost" element={<Superhost/>}/>


      </Routes>
    </div>
  
  );
  
}

export default App;
