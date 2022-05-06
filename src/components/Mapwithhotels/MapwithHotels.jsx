import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RightMap } from "./Map";
import StyledCard from "./StyledCard";
import { getCenter } from "geolib";
import page from "./img/page.png";
import { lonavla } from "./star";
import { useSelector } from "react-redux";
import { Footer } from "../Homepage/Footer/footer";
import { HomeNav } from "../Homepage/HomeNav/HomeNav";
import { Randomnav } from "../Randomnav";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  &::-webkit-scrollbar-track {
    background-color: white;
  }

  & > div {
    width: 100%;
    overflow-y: scroll;
  }

  & > div:nth-child(1) {
    min-width: 58%;
    height: 100vh;
    // overflow-y:scroll;
  }
  & > div:nth-child(2) {
    min-width: 42%;
    height: 100vh;
  }

  @media (max-width: 1100px) {
    flex-wrap: wrap;
    & > div:nth-child(2) {
      display: none;
    }
  }
`;
const HotelDiv = styled.div`
  &::-webkit-scrollbar {
    display: none;
    //   background-color:white;
  }
  scrollbar-width: none;
`;

const MapDiv = styled.div``;

const Infodiv = styled.div`
  text-align: left;
  padding-left: 20px;
  h4 {
    font-weight: 300;
  }
`;
const RoundBtn = styled.button`
  border: 1px solid #cecece;
  border-radius: 18px;
  white-space: nowrap;
  margin-right: 10px;
  margin-left: 5px;
  padding: 8px 20px 12px 20px;
  font-size: 15px;
  background-color: white;
  select {
    background-color: white;
    border: none;
    outline: none;
  }
  @media (max-width: 380px) {
    white-space: nowrap;
  }
`;

const FooterDiv = styled.div`
  width: 100%;
  height: 400px;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0px;
  border-bottom: 1px solid #cfcbcb;

  @media (max-width: 380px) {
    overflow-x: scroll;
  }
`;
export const MapwithHotels = () => {
  const data = useSelector((state) => state.searchRes);
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = () => {
    fetch("https://airbnbclonee.herokuapp.com/hotel")
      .then((res) => res.json())
      .then((res) => setHotel(res));
  };

  let inWidth = window.innerWidth;
  console.log(inWidth);
  const arr = [
    "Free Cancellation",
    "Wifi",
    "Kitchen",
    "Air conditioning",
    "Washing Machine",
    "Iron",
    "Deidicated Workshop",
    "Free parking",
    "Dryer",
  ];

  return (
    <div>
      <Randomnav />
      <Top>
        <RoundBtn>
          Price<select></select>
        </RoundBtn>
        <RoundBtn>
          Type of place<select></select>
        </RoundBtn>
        {arr.map((item, i) => (
          <RoundBtn key={i}>{item}</RoundBtn>
        ))}
      </Top>
      <Wrapper>
        <HotelDiv className="left-list">
          <Infodiv>
            <p>300+ stays in Lonavla</p>
            <h4>
              More than 8,000 guests have stayed in Lonavla. On average they
              rated their stays 4.6 out of 5stars
            </h4>
          </Infodiv>
          <hr />

          {hotel.map((item) => (
            <StyledCard item={item} />
          ))}
          <div>
            <img width="100%" src={page} />
          </div>
        </HotelDiv>
        <MapDiv>
          <RightMap />
        </MapDiv>
      </Wrapper>
      <Footer />

      {/* <FooterDiv /> */}
    </div>
  );
};
