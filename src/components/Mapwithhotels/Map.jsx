import React, { useEffect, useState } from 'react'
import  Map,{Marker,Popup} from 'react-map-gl'
import { getCenter } from 'geolib'
import {lonavla} from './star'
import styled from 'styled-components'
import 'mapbox-gl/dist/mapbox-gl.css';

const Mark = styled.div`

    
    height:30px;
    background-color:#cecede;
    border:1px solid grey;
    padding:5px 10px 0px 10px;
    font-size:14px;
    color:black;
    font-weight:700;
    border-radius:15px;

    &:hover{
        background-color:black;
        color:white;
    }
    
`
const OuterDiv = styled.div`
    height:100vh;
    @media (min-width:1200){
        display:none;
        .mapboxgl-map{
            display:none;
        }
    }
`


export const RightMap = ({hotels}) => {

    
    
    
    const [viewport, setViewPort] = useState({
        width:"100%",
        height:"100vh",
        latitude: 18.752161095706658,
        longitude: 73.40073586263334 ,
        zoom:9,
        pitch:50
    })

    const coordinates = lonavla.map((item)=>(item.coord))
    console.log(coordinates)
    let inWidth = window.innerWidth
    console.log(inWidth)
  return (
    <OuterDiv>
    <Map 
        mapStyle="mapbox://styles/noisyboii/cl1jjb12t004e15o9pytav6nh" 
        mapboxAccessToken='pk.eyJ1Ijoibm9pc3lib2lpIiwiYSI6ImNsMWlwanhvdTBsb3IzY21qMXB0OHNsMXQifQ.jh7zzzyT0G0CdtAa184tnQ'
        {...viewport}
        onMove={evt => setViewPort(evt.viewport)}
        doubleClickZoom={true}
    >
     <Marker style={{position: 'absolute',top: '9vh',}}  longitude={73.4091} latitude={18.5557}  ><Mark >"₹4,529</Mark></Marker>
     <Marker style={{position: 'absolute',top: '8vh',}}  longitude={73.3591} latitude={18.7557}  ><Mark >₹4,829</Mark></Marker>
     <Marker style={{position: 'absolute',top: '11vh',}} longitude={73.3091} latitude={18.6557} ><Mark >₹5,829</Mark></Marker>
     <Marker style={{position: 'absolute',top: '6vh',}}  longitude={73.4491} latitude={18.8557}  ><Mark >₹2,829 </Mark></Marker>
     <Marker style={{position: 'absolute',top: '10vh',}} longitude={73.4691} latitude={18.7557} ><Mark >₹3,829 </Mark></Marker>
     <Marker style={{position: 'absolute',top: '9vh',}}  longitude={73.4091} latitude={18.5557}  ><Mark >"₹4,529</Mark></Marker>
     <Marker style={{position: 'absolute',top: '8vh',}}  longitude={73.3591} latitude={18.6557}  ><Mark >₹8,829</Mark></Marker>
     <Marker style={{position: 'absolute',top: '11vh',}} longitude={73.3091} latitude={18.9557} ><Mark >₹7,829</Mark></Marker>
     <Marker style={{position: 'absolute',top: '6vh',}} longitude={73.4491} latitude={18.6057}  ><Mark >₹6,829 </Mark></Marker>
     <Marker style={{position: 'absolute',top: '10vh',}} longitude={73.4691} latitude={18.9957} ><Mark >₹4,829 </Mark></Marker>
    
    </Map>
    </OuterDiv>
  )
}
