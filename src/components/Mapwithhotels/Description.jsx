import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {starr} from './star'

const DescriptionDiv = styled.div`
    width:80%;
    display: flex;
    flex-direction: column;
    text-align:left;
    padding-left:20px;

    &>div{
        width:100%;
    }
    &>hr{
        width:40px;
        margin-left:0;
        color:#FFF8F6;
    }
    
`
const P = styled.p`
    margin:0;
    color:#717171;
    width:${({width})=>width};
    margin-bottom:5px;
`
const H3 = styled.h3`
   margin:0;
   font-weight: 400;
`
const BotDiv = styled.div`
    display:flex;
    width:100%;
    justify-content: space-between;
    margin-top:${({winwidth})=>winwidth?0:"43px"};


    &>p{
        width:200px;
        margin:0;
    }
    &>p>img{
        width:16px;
        height:16px;
    }
`

const Description = ({item}) => {
    const {title,description,location,star,price} = item
    const [winwidth,setWinwidth] = useState(false)
    
    const windWid =   window.innerWidth
    useEffect(() => {
      if(windWid<400){
          setWinwidth(true)
      }else{
          setWinwidth(false)
      }
    }, [])
    


  return (
    <DescriptionDiv>
        <div >
          <P>{title}</P>
          <H3>{windWid<1300?location.substring(0,30)+"...":location}</H3>
        </div>
        <hr/>
        <div className="description_btm"> 
            <P width={"70%"}>{winwidth?"":description}</P>
        </div>
        <BotDiv winwidth={winwidth}>
        
            <p><img src={starr}/>{star+"(19 reviews)"}</p>
            <p>{price}</p>
        </BotDiv>
      </DescriptionDiv>
  )
}

export default Description