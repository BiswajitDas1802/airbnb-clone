import "../Homepage/HomeNav/HomeNav.css"
import React,{useState} from 'react'
import styled from 'styled-components'
import EditDates from './EditDates'
import visa from './images/visa.png'
import calender from './images/calender.png'
import { Total } from './Total'
import { useNavigate } from 'react-router-dom'
import { Randomnav } from '../Randomnav'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'


const OuterDiv = styled.div`
    display:flex;
    justify-content:center;
    .wrap-up{
        width:76%;
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
    min-width:360px;
    padding-left:20px;
    // border:1px solid #cfcbcb;
    .rare{
        width:90%;
        border:1px solid #cfcbcb;
        border-radius:10px;
        padding-left:20px;
    }
`

const RightDiv = styled.div`
    width:50%;
    margin-top:85px;

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
        padding:18px 40px;
        font-size:20px;
        color:white;
        background-color:rgb(222, 19, 97);
        border-radius:5px;
        outlie:none;
        margin-bottom:100px;
        border:none;
    }
`

const CardDiv = styled.div`
    width:100%;
    // height:200px;
    display:flex;
    align-items:center;
    jutify-content:center;
    padding:30px 10px;
    @media (max-width:600px){
        flex-wrap:wrap;
        padding:0;
        align-items: center;
        jutify-content:center;
        .rccs__card--unknown{
            margin-top:40px;
            margin-left:20px;
        }
    }
    .rccs__card--unknown{
        margin-left:-20px;
    }
`

const Styledform = styled.form`
    input{
        min-width:250px;
        height:30px;
        margin-bottom:9px;
        font-size:17px;
        font-weight:500;
    }
`
const Nav =styled.div`
    height:90px;
    display:flex;
    border-bottom:1px solid #cfcbcb;
    justify-content:flex-start;

    div{
    margin-left:20px;
    margin-top:30px;
    }
    @media (max-width:600px){
        justify-content:center;
        margin-left:0;
    }
`

const Payment = () => {

    let scrll = window.scrollY
    console.log(scrll)
    const navigate = useNavigate()
    const [state,setState] = useState(false)
    const handleChange=(e) => {
        setState(e.target.value)
    }

    const [cd ,setCd] = useState({
        cvc: '',
    expiry: '',
    focus: true,
    name: '',
    number: '',

    })

    const handleCard =(e)=>{
        const { name, value } = e.target;
    
        setCd({ ...cd,[name]: value });
    }

  const bookingSuccess =()=>{
      alert(`${cd.number} Your Booking Will be confirmed once the host accepts your request`)
  }


  return (
    <>
    <Nav >
        <div onClick={()=>navigate('/')} className="logo active"></div>
    </Nav>

    
    <OuterDiv>
        <div class="wrap-up">
            <LeftDiv>
                <div>
                    <h1 style={{fontWeight:"600"}}>Request to book</h1>
                    <div className="rare">
                        <h3>This is a rare find</h3>
                        <p>Nikhil's place is usually booked</p>
                    </div>
                    <EditDates/>
                </div>
                <VisaDiv>
                    <div className="visa">
                        <div>Pay With</div><div><img src={visa}/></div>
                    </div>
                        <select onClick={(e)=>handleChange(e)}>
                            <option vlaue="">Select A Card</option>
                            <option value="show">Credit or Debit Card</option>
                            </select>
                        {state=="show"?<CardDiv>
                            <Cards
                                cvc={cd.cvc}
                                expiry={cd.expiry}
                                focused={cd.focus}
                                name={cd.name}
                                number={cd.number}
                      
                            />
                            <Styledform>
                                <input onChange={handleCard} name="name" type="text" placeholder="Add Your Name" /><br />
                                <input onChange={handleCard} name="expiry" type="number" placeholder="Add Your expiry date"/><br />
                                <input onChange={handleCard} name="cvc" type="number" placeholder="cvc" /><br />
                                <input onChange={handleCard} name="number" type="number" placeholder="Add your card no."/><br />
                            </Styledform>
                        </CardDiv>:""}
                        <p>Enter a coupon</p>
                        <hr />
                </VisaDiv>
                <Require>
                    <h2>Required for your trip</h2>
                    <div>
                        <div className="phone">
                            <div >
                                <h4 style={{fontWeight:"300"}}>Message the host</h4>
                                <p>Let the host know why you're travelling and when you'll check in.</p>
                            </div>
                            <div>
                                <button>Add</button>
                            </div>
                        </div>
                        <div className="phone">
                            <div>
                                <h4 style={{fontWeight:"200"}}>Phone number</h4>
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
                    <h5 style={{fontWeight:"400"}}>By selecting the button below, I agree to the Host's House Rules, Airbnb's COVID-19 Safety Requirements and the Guest Refund Policy. I agree to pay the total amount shown if the Host accepts my booking request.</h5>
                    <button className="pinkbtn" onClick={bookingSuccess}>Request to book</button>
                    <hr />
                </RequestBook>
            </LeftDiv>
            <RightDiv>
                <Total/>
            </RightDiv>
        </div>
    </OuterDiv>
    </>
  )
}

export default Payment