import React, { useState } from "react";
import styled from "styled-components";
import Description from "./Description";


const InfoContainer = styled.div`
  width: 95%;
  height: 200px;
  padding: 20px;
  display: flex;
  border-bottom:1px solid #ccc;
  
  @media (max-width:500px){
    flex-wrap:wrap;
    height:fit-content;
    padding: 0px;
    align-items: center;

    & > div {
      margin-top:10px;
      display: flex;
      justify-content:center;
      height: 98%;
      position: relative;
    }

    & > div > img {
      
      height: 100%;
      max-width:90%;

      border-radius: 8px;
    }

  } 

  & > div {
    
    display: flex;
    justify-content:center;
    align-items:center;
    height: 96%;
    min-width: 280px;
    position: relative;
    
  }

  & > div > img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 10;
  top: 45%;
  width: 100%;


  & > button {
    display: ${(props) => (props.hover ? "block" : "none")};
    width:30px;
    height:30px;
    border-radius:50%;

  }
  & > button:nth-child(1) {
    display: ${(props) => props.ind == 3 && "none"};
  }
  & > button:nth-child(2) {
    display: ${(props) => props.ind == 0 && "none"};
  }
`;

const StyledCard = ({ item }) => {
  const [hover, setHover] = useState(false);
  const [ind, setInd] = useState(0);

  const handleHover = () => {
    setHover(true);
  };
  const handleLeave = () => {
    setHover(false);
  };

  const handleLeft = () => {
    if (ind != 0) {
      setInd(ind - 1);
    }
  };
  const handleRight = () => {
    if (ind != 3) {
      setInd(ind + 1);
    }
  };

  


  const { img, title, location, description, star, price, total } = item;
  return (
    <InfoContainer onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <div>
        <img src={img[ind]} alt="" />
        <BtnDiv hover={hover}>
          <button ind={ind} onClick={handleLeft}>
            {"<"}
          </button>
          <button ind={ind} onClick={handleRight}>
           {" >"}
          </button>
        </BtnDiv>
      </div>
      <Description  item={item}/>
    </InfoContainer>
  );
};

export default StyledCard;

// {
//   "img":[ "https://a0.muscache.com/im/pictures/8ec4dc38-bbbe-4c39-a069-ba2bc7eba9fa.jpg?im_w=720","https://a0.muscache.com/im/pictures/miso/Hosting-551238307613226909/original/ac152671-4f60-4a2a-bb84-daec81f57749.jpeg?im_w=720","https://a0.muscache.com/im/pictures/19a60ea8-6883-4b05-83fd-10a96856a22b.jpg?im_w=720","https://a0.muscache.com/im/pictures/19a60ea8-6883-4b05-83fd-10a96856a22b.jpg?im_w=720"],
//   "location": "2BHK with Beautiful Design and Open Outdoor spa",
//   "title": "5 Star Luxury Apartment",
//   "description": "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
//   "star": 3.85,
//   "price": "₹4,529 /night",
//   "total": "£650 total",
//   "long": 18.752161095707315,
//   "lat":  73.40073586262665
// }
