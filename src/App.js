
import './App.css';

import { Homepage } from './components/Homepage/LandingPage/Homepage';

import { MapwithHotels } from './components/Mapwithhotels/MapwithHotels';
import {Routes , Route} from 'react-router-dom'
import { BookHotel } from './components/BookHotel/BookHotel';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route  path="/lonavla" element={<MapwithHotels/>}/>
        <Route path="bookhotel" element={<BookHotel/>}/>
      </Routes>

        <Homepage/>

      {/* <MapwithHotels/> */}

    </div>
  );
}

export default App;
