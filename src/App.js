
import './App.css';
import {Host} from "./components/Homepage/Become_a_host/Host"
import { Homepage } from './components/Homepage/LandingPage/Homepage';
import { MapwithHotels } from './components/Mapwithhotels/MapwithHotels';
import {Routes , Route} from 'react-router-dom'
import { BookHotel } from './components/BookHotel/BookHotel';
import { HomeNav } from './components/Homepage/HomeNav/HomeNav';
import Payment from './components/Payment/Payment';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route  path="/lonavla" element={<MapwithHotels/>}/>
        <Route path="bookhotel" element={<BookHotel/>}/>
        <Route path="/become-a-host" element={<Host/>}/>
        <Route path = "/payment" element={<Payment/>}/>
      </Routes>

    </div>
  );
}

export default App;
