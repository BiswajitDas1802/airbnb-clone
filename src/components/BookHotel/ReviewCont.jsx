import React from 'react'
import styled from 'styled-components'

const WrapDiv = styled.div`
    width:45%;
    min-width:45%;
    margin-bottom:50px;
    
    .img-name{
        display:flex;
        align-items: center;
        justify-content: left;
        margin-bottom:20px;
    }

    .img-name>img{
        width:60px;
        margin-right:10px;
        height:60px;
        border-radius:50%;
    }
    h3,p{
        margin:0;
    }
    @media (max-width:400px){
        width:100%;
    }
`

const ReviewCont = ({item}) => {
    const {img,review,name,date} = item;
  return (
    <WrapDiv>
        <div className="img-name">
            <img src={img} alt="" />
            <div>
                <h3>{name}</h3>
                <p>{date}</p>
            </div>
        </div>
        <div>
            <p>{review}</p>
        </div>
       
    </WrapDiv>
  )
}

export default ReviewCont