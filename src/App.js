
import './App.css';

import { Homepage } from './components/Homepage/LandingPage/Homepage';

import { MapwithHotels } from './components/Mapwithhotels/MapwithHotels';
import {Routes , Route} from 'react-router-dom'
import { BookHotel } from './components/BookHotel/BookHotel';
import { HomeNav } from './components/Homepage/HomeNav/HomeNav';


function App() {
  return (
    <div className="App">
      {/* <HomeNav/> */}
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route  path="/lonavla" element={<MapwithHotels/>}/>
        <Route path="bookhotel" element={<BookHotel/>}/>
      </Routes>

      {/* <MapwithHotels/> */}

    </div>
  );
}

export default App;
