import React, { useState } from "react";
import {
  lonavla,
  offbeat,
  pool,
  beach,
  cabins,
  tiny,
  tree,
} from "./Hotelcardsapi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Filter = styled.div`
  display: flex;
  padding-top: 10px;
  height: 60px;
  width: 100%;
  justify-content: center;
  & > div {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  .filters {
    width: 60%;
    height: 100%;
    // border: 1px solid black;
    // display: flex;
    // justify-content: space-around;
    .filters_fst {
      display: flex;
      height: 80%;
    }
    .filters_fst > a {
      height: 100%;
      margin-right: 20px;
    }
    .slider {
      width: 100%;
      height: 20px;
      border: 1px solid green;
    }
  }
  .rounded_btn {
    width: 30%;
    height: 100%;
    border: 1px solid green;
  }
  .btm {
    border-bottom: 5px solid black;
  }
`;

const Bdiv = styled(Link)`
  text-decoration: none;
  color: #4c503e;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${({ cardData }) =>
    cardData == offbeat ? "3px solid black" : "none"};
  transition: border-bottom 0.1s linear;
  &:focus {
    border-bottom: 3px solid black;
    color: black;
  }
  & > div {
    width: 100%;
    padding: 5px 7px;
    border-radius: 4px;
  }
  & > div:hover {
    background-color: #f5f5f5;
  }
  & > select {
    outline: none;
    border: none;
    color: #4c503e;
    font-weight: 600;
    margin-top: 5px;
  }
`;

const FilterData = ({ filterItem, carddata }) => {
  return (
    <Filter>
      <div>
        <div className="filters">
          <div className="filters_fst">
            <Bdiv
              to="/experience"
              cardData={carddata}
              onClick={() => filterItem(offbeat)}
            >
              <div>Offbeat</div>
            </Bdiv>
            <Bdiv to="/experience" onClick={() => filterItem(cabins)}>
              <div> Cabins</div>
            </Bdiv>
            <Bdiv to="/experience" onClick={() => filterItem(pool)}>
              <div>Amazing pool</div>
            </Bdiv>
            <Bdiv to="/experience" onClick={() => filterItem(beach)}>
              <div>Beachfront</div>
            </Bdiv>
            <Bdiv to="/experience" onClick={() => filterItem(tiny)}>
              <div> Tiny Homes</div>
            </Bdiv>
            <Bdiv to="/experience" onClick={() => filterItem(lonavla)}>
              <div> Outdoors</div>
            </Bdiv>
            <Bdiv to="/experience" onClick={() => filterItem(tree)}>
              <div>Treehouses</div>
            </Bdiv>
            <Bdiv to="/experience">
              <select>
                <option>More</option>
              </select>
            </Bdiv>
          </div>
        </div>
        <div className="rounded_btn"></div>
      </div>
    </Filter>
  );
};

export { FilterData };
