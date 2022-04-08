import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {starr} from '../Mapwithhotels/star'

const OuterTotal = styled.div`
    width:90%;
    min-width:400px;
    border-radius:10px;
    border:1px solid black;
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
`

export const Total = () => {

const data = useSelector(state=>state.hotel)
console.log(data)


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
                <div className="price-details"><p>2220 x 3 nights</p><p>6603rs.</p></div>
                <div className="price-details"><p>2220 x 3 nights</p><p>6603rs.</p></div>
                <div className="price-details"><p>2220 x 3 nights</p><p>6603rs.</p></div>
                <div className="price-details"><p>2220 x 3 nights</p><p>6603rs.</p></div>
                <hr />
            </div>
            <div className="price-details">
                <p>Total(INR)</p><p>₹6,652.8</p>
            </div>
        </div>
    </OuterTotal>
  )
}
