import React from 'react'
import styled from 'styled-components'
import { starr } from '../Mapwithhotels/star'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

const OuterTop = styled.div`
    height:300px;
    width:350px;
    box-shadow:0px 0px 20px gray;
    border-radius:12px;
    margin-top:20px;
    position:sticky;
    display:flex;
    align-items: center;
    justify-content: center;
`
const InDiv = styled.div`
    width:80%;
    height:80%;
    // border:1px solid gray;

    .in-top{
        display:flex;
        justify-content:space-between;


        p>img{
            height:15px;
        }
    }

    .in-sec{
        height:120px;
        width:100%;
        border:1px solid red;
        border-radius:8px;

    }

`

const PinkBtn = styled.button`
    width:100%;
    height:50px;
    color:white;
    background-color:#e71d52;
    display:flex;
    outline:none;
    border-radius:8px;
    border:none;
    margin-top:15px;
    justify-content:center;
    align-items:center;
`

const TopRight = () => {

const data = useSelector(state=>state.search)
const guest = useSelector(state=>state.guest)
const navigate = useNavigate()

console.log(data,guest)

  return (
    <OuterTop>
        <InDiv>
            <div className="in-top">
               <p style={{marginTop:"5px"}}><span style={{fontSize:"25px",fontWeight:"500"}}>₹4,555 </span>night</p> <p><img src={starr}/>4.9 . 20 reviews</p>
            </div>
            <div className="in-sec">
                <div>
                   <div style={{display:"flex",justifyContent:"space-around",borderBottom:"1px solid gray"}}>
                       <div style={{display:"flex",paddingLeft:"20px",width:"45%",height:"50px",flexDirection:"column",paddingTop:"10px",justifyContent:"start"}}>
                           <h6 style={{margin:"0"}}>Check In</h6>
                            <p style={{margin:"0"}}>{data.start.split("-").map((item,i)=>i!=3?item:"").reverse().join("/")}</p>
                       </div>
                       <div style={{display:"flex",paddingLeft:"20px",width:"45%",flexDirection:"column",paddingTop:"10px",borderLeft:"1px solid gray",justifyContent:"start"}}>
                            <h6 style={{margin:"0"}}>Check Out</h6>
                            <p style={{margin:"0"}}>{data.end.split("-").map((item,i)=>i!=3?item:"").reverse().join("/")}</p>
                       </div>
                   </div>
                <div style={{paddingLeft:"20px",paddingTop:"10px"}}>
                <h6 style={{margin:"0"}}>GUESTS</h6>
                <p style={{margin:"0"}}>{guest==0?1:guest}</p>
                </div>
                </div>
            </div>
            <div>
                <PinkBtn onClick={()=>navigate("/payment")}>Check Availability</PinkBtn>
            </div>
        </InDiv>
    </OuterTop>
  )
}

export default TopRight