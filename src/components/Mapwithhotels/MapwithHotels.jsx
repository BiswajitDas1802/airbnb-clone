import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import  {RightMap}  from './Map'
import StyledCard from './StyledCard'
import { getCenter } from 'geolib'




const Wrapper = styled.div`
    width:100%;
    display:flex;
    
    &>div{
        width:100%;
    }
    &:webkit-scroll:hidden;

    &>div:nth-child(1){
        min-width:55%;
        height:90vh;
        // overflow-y:scroll;
    }
    &>div:nth-child(2){
        min-width:45%;
        height:100vh;
    }
    
    @media (max-width: 1200px) {
        flex-wrap: wrap;
        
      }
`

const MapDiv = styled.div`
    //   min-width:600px;
    // height:90vh;
    // overflow:hidden;
`

export const MapwithHotels = () => {

const [hotel, setHotel] = useState(null)
const [coordinate, setCoordinate] = useState(null)


useEffect(() =>{
    getHotels()
    // const coord = hotel&&hotel.lonavla.map((item)=>({longitude: item.long,latitude: item.lat}))
    //     const center = getCenter(coord)
    //     console.log(center)
    //     setCoordinate({...center})
    // console.log(hotel)
},[])

const getHotels = () =>{
    fetch("https://fake-server-app-biswa.herokuapp.com/hotels")
    .then((res)=>res.json())
    .then((res)=>setHotel(res))
    // .then(()=>{
        
    // })

}

  return (
    <div>
        <Wrapper>
            <div>
            {hotel?hotel.lonavla.map((item)=><StyledCard item={item}/>):""}
            </div>
            <MapDiv>
                {/* <RightMap hotels={hotel&&hotel.lonavla} coordinate={coordinate!=null?coordinate:""}  /> */}
                <RightMap/>
                </MapDiv>
        </Wrapper>


    </div>
  )
}
