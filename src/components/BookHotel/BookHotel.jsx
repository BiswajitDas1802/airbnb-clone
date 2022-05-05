import React from "react";
import styled from "styled-components";
import { starr } from "../Mapwithhotels/star";
import ImgGrid from "./ImgGrid";
import Reviews from "./Reviews";
import Stats from "./Stats";
import { useSelection, useSelector } from "react-redux";
import { Randomnav } from "../Randomnav";
import { Footer } from "../Homepage/Footer/footer";

const Outer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 75%;
  height: 100vh;

  @media (max-width: 800px) {
    width: 95%;
  }
`;
const HeaderDiv = styled.div`
  div > div > p > img {
    height: 14px;
  }
  div > div {
    display: flex;
    justify-content: space-between;
  }
  h1 {
    font-size: 1.6rem;
    font-family: sans-serif;
    font-weight: 500;
    margin-bottom: 0px;
  }
`;

const MobImgGrid = styled.div`
       min-width:320px;
       width:100%;
       display:none;
       border:1px solid red;
       overflow-X: scroll;

       &>div{
           min-width:100%;
           height:240px;
           overflow:hidden;
       }
       
       & > div>img{
            width:100%;
            height:100%:
        
       }
       @media(max-width:800px){
           display:flex;
       }

`;

export const BookHotel = () => {
  const data = useSelector((state) => state.hotel);

  return (
    <>
      <Randomnav />
      <hr />
      <Outer>
        <Wrapper>
          <MobImgGrid>
            {data
              ? data.img.map((item, i) => (
                  <div key={i}>
                    <img src={item} />
                  </div>
                ))
              : ""}
          </MobImgGrid>
          <HeaderDiv>
            <div>
              <h1>2BHK with Beautiful Design and Open Outdoor Space</h1>
              <div>
                <p>
                  <img src={starr} />
                  {"5.0 . 19 reviews . Lonavla, Maharasthra,India"}
                </p>
                <p>share&nbsp;&nbsp;&nbsp;saved</p>
              </div>
            </div>
          </HeaderDiv>
          <ImgGrid imgArr={data.img} />
          <Stats img={data.img} />
          <Reviews />
        </Wrapper>
      </Outer>
      {/* <Footer /> */}
    </>
  );
};
