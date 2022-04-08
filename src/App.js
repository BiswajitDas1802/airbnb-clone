
import './App.css';
import {Host} from "./components/Homepage/Become_a_host/Host"
import { Homepage } from './components/Homepage/LandingPage/Homepage';
import { MapwithHotels } from './components/Mapwithhotels/MapwithHotels';
import {Routes , Route} from 'react-router-dom'
import { BookHotel } from './components/BookHotel/BookHotel';
import { Singup } from './components/Homepage/LoginSignup/Signup';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route  path="/lonavla" element={<MapwithHotels/>}/>
        <Route path="bookhotel" element={<BookHotel/>}/>
        <Route path="/become-a-host" element={<Host/>}/>
        <Route path="/SignUp" element={<Singup/>}/>
        <Route path="/Login" element={<Singup/>}/>
      </Routes>
    </div>
  
  );
  
}

export default App;
