import React from 'react'
import styled from 'styled-components'

const CalenderDiv = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    margin-bottom:20px;
    &>div{
        width:50%;

        h3,p{
            margin:0;
        }
        input{
            margin-top:20px;
        }
    }
`

const EditDates = () => {
  return (
    <div>
         
                        <h2>Your Trip</h2>
                        <CalenderDiv>
                            <div>
                            <h3>Dates</h3>
                            <p>22 to 23</p>
                            </div>
                            <div>
                                <label > Edit </label>
                                <input type="date" ></input>
                            </div>
                        </CalenderDiv>
                        <CalenderDiv>
                            <div>
                            <h3>Guests</h3>
                            <p>1 guest</p>
                            </div>
                            <div>
                                <label > Edit </label>
                                {/* <input type="date" ></input> */}
                            </div>
                        </CalenderDiv>
                    <hr />
    </div>
  )
}

export default EditDates