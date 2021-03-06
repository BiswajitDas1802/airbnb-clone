import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CalenderDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  & > div {
    width: 50%;

    h3,
    p {
      margin: 0;
    }
    input {
      margin-top: 20px;
    }
  }
`;

const EditDates = () => {

const data = useSelector(state=>state.search)
const guest = useSelector(state=>state.guest)

const {start,end} = data

  return (
    <div>
      <h2>Your Trip</h2>
      <CalenderDiv>
        <div>
          <h3 style={{ fontWeight: "500", fontSize: "18px" }}>Dates</h3>
          <p>{start.split("-").reverse().join("/")}"to"{end.split("-").reverse().join("/")}</p>
        </div>
        <div>
          <label> Edit </label>
          <input type="date"></input>
        </div>
      </CalenderDiv>
      <CalenderDiv>
        <div>
          <h3 style={{ fontWeight: "500", fontSize: "18px" }}>Guests</h3>
          <p>1 guest</p>
        </div>
        <div>
          <label> Edit </label>
          {/* <input type="date" ></input> */}
        </div>
      </CalenderDiv>
      <hr />
    </div>
  );
};

export default EditDates;
