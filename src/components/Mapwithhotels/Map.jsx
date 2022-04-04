import React, { useEffect, useState } from 'react'
import  Map,{Marker,Popup} from 'react-map-gl'
import { getCenter } from 'geolib'
import {lonavla} from './star'
import styled from 'styled-components'

const Mark = styled.div`

    
    height:30px;
    background-color:green;
    padding:5px 10px;
    color:white;
    border-radius:15px;
`


export const RightMap = ({hotels}) => {

    
    
    
    const [viewport, setViewPort] = useState({
        width:"80%",
        height:"100vh",
        latitude: 18.752161095706658,
        longitude: 73.40073586263334 ,
        zoom:9,
        pitch:50
    })

    // const coordinate = hotels&&hotels.map((item)=>({longitude: item.long,latitude: item.lat}))
    // const center = getCenter(coordinate)


    // useEffect(() => {
        // console.log(center.latitude,center.longitude)
        // setViewPort({...viewport,latitude: center.latitude})
        // setViewPort({...viewport,longitude: center.longitude})
    // }, [])
    const coordinates = lonavla.map((item)=>(item.coord))
    console.log(coordinates)
    let inWidth = window.innerWidth

  return (
    <Map style={inWidth<1300&&{display:"none"}}
        mapStyle="mapbox://styles/noisyboii/cl1jjb12t004e15o9pytav6nh" 
        mapboxAccessToken='pk.eyJ1Ijoibm9pc3lib2lpIiwiYSI6ImNsMWlwanhvdTBsb3IzY21qMXB0OHNsMXQifQ.jh7zzzyT0G0CdtAa184tnQ'
        {...viewport}
        onMove={evt => setViewPort(evt.viewport)}
        doubleClickZoom={true}
    >
        {/* {coordinates.map((item)=>(
        <Marker longitude={item[0] } latitude={item[1]} />

     ))}  */}
     <Marker style={{position: 'absolute',top: '9vh',}} longitude={73.4091} latitude={18.5557}  ><Mark>"₹4,529</Mark></Marker>
     <Marker style={{position: 'absolute',top: '8vh',}} longitude={73.3591} latitude={18.7557}  ><Mark>₹2,829</Mark></Marker>
     <Marker style={{position: 'absolute',top: '11vh',}} longitude={73.3091} latitude={18.6557} ><Mark>₹2,829</Mark></Marker>
     <Marker style={{position: 'absolute',top: '6vh',}} longitude={73.4491} latitude={18.8557}  ><Mark>₹2,829 </Mark></Marker>
     <Marker style={{position: 'absolute',top: '10vh',}} longitude={73.4691} latitude={18.7557} ><Mark>₹2,829 </Mark></Marker>
     <Marker style={{position: 'absolute',top: '9vh',}} longitude={73.4091} latitude={18.5557}  ><Mark>"₹4,529</Mark></Marker>
     <Marker style={{position: 'absolute',top: '8vh',}} longitude={73.3591} latitude={18.7557}  ><Mark>₹2,829</Mark></Marker>
     <Marker style={{position: 'absolute',top: '11vh',}} longitude={73.3091} latitude={18.9557} ><Mark>₹2,829</Mark></Marker>
     <Marker style={{position: 'absolute',top: '6vh',}} longitude={73.4491} latitude={18.6057}  ><Mark>₹2,829 </Mark></Marker>
     <Marker style={{position: 'absolute',top: '10vh',}} longitude={73.4691} latitude={18.7557} ><Mark>₹2,829 </Mark></Marker>
    
    </Map>
  )
}
