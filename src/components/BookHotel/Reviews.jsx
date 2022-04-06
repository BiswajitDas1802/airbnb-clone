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
    </div>
  )
}

export default Reviews