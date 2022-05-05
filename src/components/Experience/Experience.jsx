import React from 'react'
import './style.css'
import './Navbar'
import { Navbar } from './Navbar'
import { lonavla } from './Hotelcardsapi'
import { beach } from './Hotelcardsapi'
import { Hotelcards } from './Hotelcards'

import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Routes,
    Route,
    Link
} from "react-router-dom"
import { Footer } from '../Homepage/Footer/footer'
const Wrapper = styled.div`
width:90%;
display:flex;
flex-wrap:wrap;
@media (max-width:680px){
  
}
`
const ExperienceWrap = styled.div`
width:100%;
display:flex;
// justify-content:center;
align-items:center;
flex-direction:column;
`
function Experience() {
    const [cardData, setCardData] = React.useState(lonavla);
    const [beachData, setBeachData] = React.useState(beach);
     //console.log(lonavla);

const filterItem = (val) => {
  setCardData(val)

}

      return (
        <ExperienceWrap>
        
          <Navbar filterItem = {filterItem} />
       
          <Wrapper>

           

          {cardData.map((item)=>  <Hotelcards cardData={item} />)}
 
          
            
          </Wrapper>
          <Footer/>
        </ExperienceWrap>
        
      );
    };
  
export {Experience}