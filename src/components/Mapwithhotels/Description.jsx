import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {starr} from './star'
import heart from './img/heart-solid.svg'
import {useNavigate} from 'react-router-dom'
import { bookHotel } from "../../redux/action";
import { useDispatch } from "react-redux";

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
    &>div>div{
        display:flex;
        justify-content:space-between;

        i{
            font-size:25px;
            font-weight:200;
            color:#cecece;
        }
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
        // width:200px;
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
    const [like,setLike] = useState(false)
    
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const windWid =   window.innerWidth
    useEffect(() => {
      if(windWid<400){
          setWinwidth(true)
      }else{
          setWinwidth(false)
      }
    }, [])
    
    const handleLike=()=>{
        setLike(!like)
    }

    const handleBook =(data)=>{
        dispatch(bookHotel(data))
        navigate("/bookhotel")
    }

  return (
    <DescriptionDiv>
        <div  >
          <div><P>{title}</P>{like?<svg onClick={handleLike} xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 512 512" height="23px"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg>:<i onClick={handleLike} class="far fa-heart"></i>} </div>
          <H3>{windWid<1300?location.substring(0,30)+"...":location}</H3>
        </div>
        <hr/>
        <div onClick={()=>handleBook(item)} className="description_btm"> 
            <P width={"70%"}>{winwidth?"":description}</P>
        </div>
        <BotDiv  winwidth={winwidth}>
        
            <p><img src={starr}/>{star+"(19 reviews)"}</p>
            <p>{price}</p>
        </BotDiv>
      </DescriptionDiv>
  )
}

export default Description