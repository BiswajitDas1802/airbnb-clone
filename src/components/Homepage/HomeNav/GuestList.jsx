import React from 'react'
import Styled from "styled-components"
import { useState } from 'react'

const Button = Styled.button`

  border-radius:20px;
  width:40px;
  height:40px

`

const Boldwrapper = Styled.p`

  font-weight:600;

`

const Parawrapper = Styled.p`

color:grey;

`





export const GuestList = ({guest,setGuest,pet,setPet}) => {


  const  [adults, setAdults]=useState(0);
  const  [child, setChild] = useState(0);
  const  [infants, setInfants] = useState(0);

  const handleSubAdult =()=>{

    setGuest(guest-1)
    setAdults(adults-1)
  };

  const handleAddAdult =()=>{
    setGuest(guest+1);
    setAdults(adults+1);
  }
  const handleSubChild =()=>{

    setGuest(guest-1)
    setChild(child-1)
  };

  const handleAddChild =()=>{
    setGuest(guest+1);
    setChild(child+1);
  }
  const handleSubInfants =()=>{

    setGuest(guest-1)
    setInfants(infants-1)
  };

  const handleAddInfants =()=>{
    setGuest(guest+1);
    setInfants(infants+1);
  }
  const handleSubPet =()=>{
    setPet(pet-1)
  };

  const handleAddPet =()=>{
    setPet(pet+1);
  }


  
  return (
    <div>
        <div style={{display:"Flex"}}>
          <div>
            <Boldwrapper>
                Adults
            </Boldwrapper>
            <Parawrapper>
                ages 13 or above
            </Parawrapper>
          </div>
          <div style={{display:"Flex" ,marginLeft:"33%",gap:"20px" ,alignItems:"center"}}>
              <Button onClick={handleSubAdult} disabled={adults>0?false:true}>-</Button>
              <p>{adults}</p>
              <Button onClick={handleAddAdult} disabled={guest<16?false:true}>+</Button>
          </div>


        </div>
        <hr/>
        <div style={{display:"Flex"}}>
          <div>
          <Boldwrapper>
              Children
          </Boldwrapper>
          <Parawrapper>
              ages 2-12
          </Parawrapper>
          </div>

          <div style={{display:"Flex" ,marginLeft:"43%",gap:"20px" ,alignItems:"center"}}>
              <Button onClick={handleSubChild} disabled={child>0?false:true}>-</Button>
              <p>{child}</p>
              <Button onClick={handleAddChild} disabled={guest<16?false:true}>+</Button>
          </div>

        </div>
        <hr/>
        <div style={{display:"Flex"}}>
          <div>
            <Boldwrapper>
                Infants
            </Boldwrapper>
            <Parawrapper>
                under 2
            </Parawrapper>
          </div>

          <div style={{display:"Flex" ,marginLeft:"46%",gap:"20px",alignItems:"center"}}>
              <Button onClick={handleSubInfants} disabled={infants>0?false:true}>-</Button>
              <p>{infants}</p>
              <Button onClick={handleAddInfants} disabled={guest<16?false:true}>+</Button>
          </div>

        </div>
        <hr/>
        <div style={{display:"Flex"}}>
          <div>
            <Boldwrapper>
                Pets
            </Boldwrapper>
            <Parawrapper>
                Bringing a service animal?
            </Parawrapper>
          </div>

          <div style={{display:"Flex" ,marginLeft:"20%" ,gap:"20px",alignItems:"center"}}>
              <Button onClick={handleSubPet} disabled={pet>0?false:true}>-</Button>
              <p>{pet}</p>
              <Button onClick={handleAddPet} disabled={pet<5?false:true}>+</Button>
          </div>

        </div>
    </div>
  )
}
