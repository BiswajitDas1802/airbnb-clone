
import './App.css';

import { Homepage } from './components/Homepage/LandingPage/Homepage';

import { MapwithHotels } from './components/Mapwithhotels/MapwithHotels';
import {Routes , Route} from 'react-router-dom'
import { BookHotel } from './components/BookHotel/BookHotel';


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route  path="/lonavla" element={<MapwithHotels/>}/>
        <Route path="bookhotel" element={<BookHotel/>}/>
      </Routes>
=======

        <Homepage/>

      {/* <MapwithHotels/> */}

>>>>>>> 76f8894c0296af43c8f183d3d2f19c63a1685f74
    </div>
  );
}

export default App;
