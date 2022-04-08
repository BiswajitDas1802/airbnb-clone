import React from 'react'
import styled from 'styled-components'
import EditDates from './EditDates'
import visa from './images/visa.png'
import calender from './images/calender.png'
import { Total } from './Total'
import { useNavigate } from 'react-router-dom'



const OuterDiv = styled.div`
    display:flex;
    justify-content:center;
    .wrap-up{
        width:80%;
        display:flex;
        // border:1px solid red;
    }
    @media (max-width:600px){
        .wrap-up{
            width:100%;
           display:flex;
           flex-direction:column;
        }
    }
`
const LeftDiv = styled.div`
    width:50%;
    min-width:400px;
    // border:1px solid red;
`

const RightDiv = styled.div`
    width:50%;
    display:flex;
    justify-content: center;
    @media (max-width:600px){
        width:100%;
    }
    
`

const VisaDiv=styled.div`
    .visa{
        width:100%;
        display:flex;
        justify-content:space-between;
    }
    select{
        height:70px;
        width:80%;
        margin-top:20px;
        border-radius:10px;
    }
`
const Require = styled.div`
    width:100%;
    .phone{
        display:flex;
        justify-content:space-between;
        margin-bottom:20px;

        div>h4,div>p{
            margin:0;
        }

        div>button{
            padding:8px 15px;
            background-color:white;
            border-radius:8px;
        }
    }
`
const Cancel = styled.div`

`
const CalDiv = styled.div``

const RequestBook = styled.div`
    .pinkbtn{
        padding:10px 20px;
        color:white;
        background-color:rgb(222, 19, 97);
        border-radius:5px;
        outlie:none;
        border:none;
    }
`

const Payment = () => {

    let scrll = window.scrollY
    console.log(scrll)
    const navigate = useNavigate()

  return (
    <OuterDiv>
        <div class="wrap-up">
            <LeftDiv>
                <div>
                    <h2>Request to book</h2>
                    <div>
                        <h3>This is a rare find</h3>
                        <p>Nikhil's place is usually booked</p>
                    </div>
                    <EditDates/>
                </div>
                <VisaDiv>
                    <div className="visa">
                        <div>Pay With</div><div><img src={visa}/></div>
                    </div>
                        <select><option value="credit">Credit or Debit Card</option></select>
                        <p>Enter a coupon</p>
                        <hr />
                </VisaDiv>
                <Require>
                    <h2>Required for your trip</h2>
                    <div>
                        <div className="phone">
                            <div >
                                <h4>Message the host</h4>
                                <p>Let the host know why you're travelling and when you'll check in.</p>
                            </div>
                            <div>
                                <button>Add</button>
                            </div>
                        </div>
                        <div className="phone">
                            <div>
                                <h4>Phone number</h4>
                                <p>Add and confirm your phone number to get trip updates.</p>
                            </div>
                            <div>
                                <button>Add</button>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </Require>
                <Cancel>
                    <h2>Cancellation policy</h2>
                    <h3>Free cancellation before 19 Apr. Cancel before check-in on 20 Apr for a partial refund. Learn more</h3>
                    <h3>Our Extenuating Circumstances policy does not cover travel disruptions caused by COVID-19. Learn more</h3>
                    <hr />
                </Cancel>
                <CalDiv>
                    <div><img/></div>
                    <div>
                        <h3>Your reservation won’t be confirmed until the host accepts your request (within 24 hours).</h3>
                        <h3>You won’t be charged until then.</h3>
                    </div>
                    <hr />
                </CalDiv>
                <RequestBook>
                    <h6>By selecting the button below, I agree to the Host's House Rules, Airbnb's COVID-19 Safety Requirements and the Guest Refund Policy. I agree to pay the total amount shown if the Host accepts my booking request.</h6>
                    <button className="pinkbtn">Request to book</button>
                    <hr />
                </RequestBook>
            </LeftDiv>
            <RightDiv>
                <Total/>
            </RightDiv>
        </div>
    </OuterDiv>
  )
}

export default Payment