import React from 'react'
import {starr} from '../Mapwithhotels/star'
import prog from './bookHotelimg/progress.png'
import styled from 'styled-components'
import ReviewCont from './ReviewCont'
import map from './bookHotelimg/map.png'

const StyledImg = styled.div`
    width:100%;

    &>img{
        width:100%;
    }

    @media (max-width:400px){
        display:none;
    }
    
`
const StyledRev = styled.div`
    width:100%;
    margin-top:30px;
    display:flex;
    flex-wrap: wrap;
    justify-content:space-between;
`
const Revbutton= styled.div`
    outline:none;
    padding:10px 20px;
    border:1px solid black;
    width:160px;
    border-radius:10px;
    margin-bottom:45px;
`
const Mapdiv = styled.div`
    margin-top:40px;
    img{
        width:100%;
    }
`
const HostDetails = styled.div`
    margin-top:50px;
    width:40%;
    .host-img{
        display:flex;

        h2,p{
            margin:0;
        }

        img{
            width:60px;
            margin-right:10px;
            height:60px;
            border-radius:50%;
        }
    }
`

const Reviews = () => {

    const obj ={"img":"https://a0.muscache.com/im/pictures/user/649aa4d4-579c-4783-99a8-06ff86f3b1e6.jpg?im_w=240",
                "review":"It was such a lovely stay, so homely and comfortable. As real as what’s shown in the pictures. It’s definitely more than you’ve paid for in every way. A good quiet neighbourhood as well. I",
                "name":"Swapneel",
                "date":"March 2022"
    }
    const arr=[{"img":"https://a0.muscache.com/im/pictures/user/a5d37e59-7da3-4a0c-a2e6-6725f990a8f4.jpg?im_w=240",
    "review":"The place is well located within short distance of major beaches and eateries in Alibaug. The house was cosy and comfortable. However, we found no oil to cook and were",
    "name":"Srikar",
    "date":"March 2022"
},{"img":"https://a0.muscache.com/im/pictures/user/45b90fb6-2084-4a6d-a040-10248beea03c.jpg?im_w=240",
"review":"It is great for a staycation or weekend trip. Everything was of great quality and as promised. It was comfortable hygenic and homely.",
"name":"Shrutika",
"date":"March 2022"
},{"img":"https://a0.muscache.com/im/pictures/user/6d693655-8476-4356-911c-e3cc694816cb.jpg?im_w=240",
"review":"It was such a lovely stay, so homely and comfortable. As real as what’s shown in the pictures. It’s definitely more than you’ve paid for in every way. A good quiet neighbourhood as well. I",
"name":"Daniel Tatenda",
"date":"March 2022"
},{"img":"https://a0.muscache.com/im/pictures/user/649aa4d4-579c-4783-99a8-06ff86f3b1e6.jpg?im_w=240",
"review":"It was such a lovely stay, so homely and comfortable. As real as what’s shown in the pictures. It’s definitely more than you’ve paid for in every way. A good quiet neighbourhood as well. I",
"name":"Swapneel",
"date":"March 2022"
}]
  return (
    <div >
        <h2>
            <img height="16px" src={starr}/>{"4.75 . 249 reviews"}
        </h2>
        <StyledImg>
            <img src={prog} alt="" />
        </StyledImg>
        <StyledRev className="reviews">
            {arr.map((item,i)=><ReviewCont item={item}/>)}
        </StyledRev>
        <Revbutton className="show-rev">Show All 249 Reviews</Revbutton>
            <hr/>
        <Mapdiv>
            <h2 style={{fontWeight:"300"}}>Where you'll be</h2>
            <img src={map} alt=""/>
        </Mapdiv>
        <div>
            <h3>Alibag , Maharasthra ,India</h3>
            <p>This apartment is located in very peaceful and developed residential Area of Varsoli and the Complex has 36 Apartments with ample parking space and security features such as CCTV Camera, EPBX an Small Garden and Driver Waiting Room.</p>
            <h3 style={{marginBottom:"50px"}}>Show More</h3>
            <hr/>
        </div>
        <HostDetails>
            <div className="host-img">
            <img src="https://a0.muscache.com/im/pictures/user/649aa4d4-579c-4783-99a8-06ff86f3b1e6.jpg?im_w=240" alt="" />
            <div>
                <h2>Hosted By Nikhil</h2>
                <p>Joined in May 2015</p>
            </div>
            </div>
            <div></div>
            <div>
            <h3>During your stay</h3>
            <p>Sometimes its quite possible to have a greet with guest, we are four brother you will meet any one of us and I am just a phone call away if you require anything.</p> 
            <p>Response rate: 100%</p>
            <p>Response time: within an hour</p>
            </div>
        <Revbutton style={{width:"100px"}}>Contact Host</Revbutton>
        </HostDetails>
    </div>
  )
}

export default Reviews