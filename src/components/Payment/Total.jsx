import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {starr} from '../Mapwithhotels/star'

const OuterTotal = styled.div`
    width:90%;
    min-width:400px;
    border-radius:10px;
    border:1px solid #cfcbcb;
    height:550px;
    // position:fixed;
    display:flex;
    justify-content:center;
    align-items:center;

    
    .innertot{
        width:90%;
        height:90%;
        // border:1px solid red;
    }
    @media (max-width:600px){
        width:100%;
        
        .innertot{
            width:100%;
        }
    }
    p>img{
        height:10px;
    }

    .top-img{
        
        div>div>img{
            width:120px;
            border-radius:5px;
            height:100px;
            margin-right:20px;
        }
        .img-rev{
            p{
                font-size:12px;
            }
        }
    }
    .price-details{
        display:flex;
        justify-content:space-between;

    }
    .top-img>div{
        display:flex;
    }
`

export const Total = () => {

const data = useSelector(state=>state.hotel)
const search = useSelector(state=>state.search)
console.log(data)
const {start,end} = search

const {price} = data
const p = Number(price[1]+price[3]+price[4]+price[5])
const s = Number(start.split("-").join(""))
const e = Number(end.split("-").join(""))



  return (
    <OuterTotal>
        <div className="innertot">
            <div className="top-img">
                <div>
                    <div>
                        <img src={data.img[0]}/>
                    </div>
                    <div className="img-rev">
                        <div>{data.title}</div>
                        <h4>{data.location}</h4>
                        <p><img src={starr}/>{data.star}(249 reviews)</p>
                    </div>
                </div>
                <hr/>
            </div>
            <div>
                <h2>Price Details</h2>
                <div className="price-details"><p>{p} x {e-s} nights</p><p>{p*(e-s)}rs.</p></div>
                <div className="price-details"><p>Long stay discount</p><p>-₹660</p></div>
                <div className="price-details"><p>Service fee</p><p>₹0</p></div>
                <div className="price-details"><p>Occupancy taxes and fees</p><p>₹712.8</p></div>
                <hr />
            </div>
            <div className="price-details">
                <p>Total(INR)</p><p>{p*(e-s)+(712.8-660)}</p>
            </div>
        </div>
    </OuterTotal>
  )
}
