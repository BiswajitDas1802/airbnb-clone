import React from 'react'
import styled from 'styled-components'
import ss1 from './bookHotelimg/ss1.png'
import ss2 from './bookHotelimg/ss2.png'
import Reviews from './Reviews'
import TopRight from './TopRight'


const OuterDiv = styled.div`
    
    width100%;
    display:flex;
    margin-top:40px;
    @media (max-width:800px){
        flex-wrap:wrap;
        &>div{
            width:100%;
        }
    }
    
    
`
const LeftDiv = styled.div`
    width:65%;

    &>div{
        display:flex; 
        width:100%;
        justify-content:space-between;
    }

    &>div>h3{
        font-size:24px; 
        font-weight:500;
    }
    &>div:nth-child(2) {
        display:block;
        
    }
    &>div>div>h2{
        font-size:25px;
        font-weight:400;
    }
    .icon-div{
        display:flex;
        margin:20px 0;
        &>div{
            i{
                width:20px;
                margin-top:3px;
                font-size:25px;
                margin-right:20px;
            }
            
            h4,p{
                margin:0;
            }
        }
    }
    .img-cont{
        min-width:48%;
        margin-right:20px;
        &>img{
            width:100%;
            height:200px;
            border-radius:10px;
        }
    }

    .show-area{
        width:90%;
        display:flex;
        overflow-X: scroll;
        scrollbar-display:none;
    }
    .show-area::-webkit-scrollbar{
        display:none;
    }

    .ss{
        height:250px;
        img{
            width:35%;
            height:210px;
        }
        img:nth-child(2){
            margin-top:25px;
        }
        img:nth-child(1){
            margin-top:-20px;
        }
    }
    .amenities{
        height:50px;
        padding:0 40px;
        font-size:14px;
        margin-top:40px;
        border-radius:10px;
        background-color:white;
        border:1px solid black;
        margin-bottom:40px;
    }

    @media (max-width:800px){
        .ss{
            display:flex;
            flex-direction:column;
            height:450px;
            
            img{
                min-width:80%;
                height:220px;
            }
        }
        .img-cont{
            min-width:100%;
        }
    }
   
    `
const Avatar = styled.div`
    width:65px;
    height:65px;
    border-radius:50%;
    // border:1px solid red;
    margin:24px 30px;
    &>img{
        width:100%;
        height:100%;
        border-radius:50%;
    }
`
const RightDiv = styled.div`
    width:45%;
    position: relative;
    display:flex;
    justify-content:center;
`
const Stats = ({img}) => {
  return (
    <OuterDiv>
        <LeftDiv>
            <div >
                <div>
                <h2>Entire serviced apartment hosted by Nikhil</h2>
                <p>6 guests2 bedrooms3 beds2 bathrooms</p>
                </div>

                <div>
                    <Avatar>
                        <img src="https://a0.muscache.com/im/pictures/user/d8412ece-b70d-4870-a6c4-bcdf59884299.jpg?im_w=240"/>
                    </Avatar>
                </div>
            </div>
            <div>
                <div className="icon-div">
                    <div><i class="fa-solid fa-location-dot"></i></div>
                    <div>
                    <h4>Self Check in</h4>
                    <p>You can check in with doorperson</p>
                    </div>
                </div>
                <div className="icon-div">
                    <div><i class="fa-solid fa-door-open"></i></div>
                    <div>
                    <h4>Greate Location</h4>
                    <p>90% of the recent guests gave the location a 5-star rating</p>
                    </div>
                </div>
                   
                <div className="icon-div">
                    <div><i class="fa-solid fa-calendar"></i></div>
                    <div>
                    <h4>Free Cancellation for 48 hours</h4>
                    </div>
                </div>
            </div>
            <div>
                <p>
                Stayholic homestay is located in prime location at Calangute Candolim road. Beach is walking distance from location. It's a luxurious furnished apartment with AC in all bedrooms including living room, along with a fully equipped kitchen.This apartment has huge living room with 2 balconies one with road facing and other one is garden facing. Equipped with Wifi and Smart TV along with Tata sky connection for guest entertainment. Provided inverter backup for lights, fans and TV ...
                </p>
            </div>
                <p style={{margin:"20px 0",textDecoration:"underline"}}>Show More</p>
                <hr />
            <div style={{display:"block",marginBottom:"40px"}}>
                <h3>Living Area & Bed Room</h3>
                <div className="show-area">
                    {img.map((item,i)=>i<3&&<div className="img-cont">
                        <img src={item}/>
                        <div>
                        </div>
                    </div>)}
                    
                </div>
            </div>
            <hr />
            <div style={{display:"block"}}>
                <h3>What this place offers</h3>
                <div className="ss">
                    <img src={ss1} alt="" /><img src={ss2} alt="" />
                </div>
                <button className="amenities">Show all 37 amenities</button>
            </div>
            <hr />
        </LeftDiv>
        <RightDiv>
            <TopRight/>
        </RightDiv>
    </OuterDiv>
  )
}

export default Stats