import React from 'react'
import styled from 'styled-components'
import {starr} from '../Mapwithhotels/star'
import ImgGrid from './ImgGrid'
import Reviews from './Reviews'
import Stats from './Stats'

const Outer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
`
const Wrapper = styled.div`
    width:75%;
    // border:1px solid red;
    height:100vh;
    
    @media (max-width:400px){
        width:95%;
    }
`
const HeaderDiv = styled.div`
    div>div>p>img{
        height:14px;
    }
    div>div{
        display:flex;
        justify-content:space-between;

        
    }
    h1{
        font-size:1.6rem;
        font-family:sans-serif;
        font-weight:500;
        margin-bottom:0px;
    }
`

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
       @media(max-width:400px){
           display:flex;
       }

`


export const BookHotel = () => {

const data= {
    "img":[ "https://a0.muscache.com/im/pictures/8ec4dc38-bbbe-4c39-a069-ba2bc7eba9fa.jpg?im_w=720","https://a0.muscache.com/im/pictures/miso/Hosting-551238307613226909/original/ac152671-4f60-4a2a-bb84-daec81f57749.jpeg?im_w=720","https://a0.muscache.com/im/pictures/19a60ea8-6883-4b05-83fd-10a96856a22b.jpg?im_w=720","https://a0.muscache.com/im/pictures/19a60ea8-6883-4b05-83fd-10a96856a22b.jpg?im_w=720","https://a0.muscache.com/im/pictures/8ec4dc38-bbbe-4c39-a069-ba2bc7eba9fa.jpg?im_w=720"],
    "location": "2BHK with Beautiful Design and Open Outdoor spa",
    "title": "5 Star Luxury Apartment",
    "description": "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    "star": 3.85,
    "price": "₹4,529 /night",
    "total": "£650 total",
    "coord": [18.752161095707315,73.40073586262665]
     
  }

  return (
    <Outer>
        <Wrapper>
            <MobImgGrid>
                {data.img.map((item,i)=><div key={i}><img src={item}/></div>)}
            </MobImgGrid>
            <HeaderDiv>
                <div>
                <h1>2BHK with Beautiful Design and Open Outdoor Space</h1>
                <div>
                <p><img src={starr}/>{"5.0 . 19 reviews . Lonavla, Maharasthra,India"}</p>
                <p>share&nbsp;&nbsp;&nbsp;saved</p>
                </div>
                </div>
            </HeaderDiv>
            <ImgGrid imgArr={data.img}/>
            <Stats img={data.img}/>
            <Reviews/>
        </Wrapper>
    </Outer>
  )
}
