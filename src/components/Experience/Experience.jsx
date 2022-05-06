import React from "react";
// import "./style.css";
import "./Navbar";
import { FilterData } from "./Navbar";
import { lonavla, offbeat } from "./Hotelcardsapi";
import { beach } from "./Hotelcardsapi";
import { Hotelcards } from "./Hotelcards";

import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Footer } from "../Homepage/Footer/footer";
const Wrapper = styled.div`
  width: 96%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 680px) {
  }
`;
const ExperienceWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
function Experience() {
  const [cardData, setCardData] = React.useState(offbeat);
  const [beachData, setBeachData] = React.useState(beach);
  //console.log(lonavla);

  const filterItem = (val) => {
    setCardData(val);
  };

  return (
    <ExperienceWrap>
      <FilterData carddata={cardData} filterItem={filterItem} />

      <Wrapper>
        {cardData.map((item) => (
          <Hotelcards cardData={item} />
        ))}
      </Wrapper>
      <Footer />
    </ExperienceWrap>
  );
}

export { Experience };
