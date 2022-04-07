import React, { useState } from "react";
import styled from "styled-components";


const InfoContainer = styled.div`
  width: 25%;
  height: 350px;
  padding: 20px;
 
  border-bottom:1px solid #ccc;

  @media (max-width:500px){
    flex-wrap:wrap;
    height:fit-content;
    padding: 0px;
    align-items: center;

    & > div {
      border:1px solid red;
      margin-top:10px;
      display: flex;
      justify-content:center;
      height: 98%;
      position: relative;
    }

      div > img {

      height: 100%;
      max-width:90%;

      border-radius: 8px;
    }

  }

  &>div:first-child {
    display: flex;
    justify-content:center;
    align-items:center;
    height: 280px;
    min-width: 280px;
    position: relative;

  }
  &>div:last-child{
    display:flex;
    justify-content:space-between;

    div:first-child{
      text-align:left;
      
    }
    div:last-child{
      text-align:right;
    }
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

const Hotelcards = ({ cardData }) => {
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

  const { img, title, location, description, star, price, total } = cardData;
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
      <div>
          <div>
            <p className="title">
            {title.length>20?title.substring(0,15)+"...":title}
          </p>
          
          <p className="price">
          602 kilometers away
            
            </p>
            </div>

          <div>
              <p>{price}</p>
              
              <p className="price">13-19 may</p>
          </div>
        </div>
    </InfoContainer>
  );
 }

 
 
;

export { Hotelcards};