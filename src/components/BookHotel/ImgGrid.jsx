import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 800px) {
    display: none;
  }

  & > div:nth-child(1) {
    width: 100%;
    height: 370px;
    border-radius: 12px 0px 0px 12px;
    overflow: hidden;
    margin-right: 10px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  & > div:nth-child(2) {
    width: 100%;
    border-radius: 0px 12px 12px 0px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    justify-content: space-between;
  }
  div > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  div > div:nth-child(1) {
    margin-bottom: 10px;
  }
  & > div > div > img {
    width: 49%;
    height: 180px;
  }
`;

const ImgGrid = ({ imgArr }) => {
  return (
    <Wrap>
      <div>
        <img src={imgArr[0]} alt="" />
      </div>
      <div>
        <div>
          <img src={imgArr[1]} alt="" />
          <img src={imgArr[2]} alt="" />
        </div>
        <div>
          <img src={imgArr[3]} alt="" />
          <img src={imgArr[4]} alt="" />
        </div>
      </div>
    </Wrap>
  );
};

export default ImgGrid;
