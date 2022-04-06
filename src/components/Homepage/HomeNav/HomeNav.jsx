import React from 'react'
import "./HomeNav.css"
import { useState } from 'react'

import Styled from "styled-components"

const Hamwrapper = Styled.div`

margin-top:7px;
width:30%;
height:73%;
border-radius: 30px;
background-color: white;
border:1px solid transparent;
display: flex;
color:black;
border:1px solid rgb(204, 195, 195);

`

export const HomeNav = () => {

    const [homeNav,setHomeNav]=useState(false)
    const [airbnb_logo,setLogo]=useState(false)
    const [globe_icon,setGlobe]=useState(false)
    const [become_host,setBecomeHost]=useState(false)
    const [lower_head,setLowerHead]=useState(false)
    const [navmiddle,setNavmiddle]=useState(false)
    const [scroll_search,setScrollSearch]=useState(false)


    const changeNavbar=()=>{

        if(window.scrollY>=145){
            setHomeNav(true)
            setLogo(true)
            setGlobe(true)
            setBecomeHost(true)
            setLowerHead(true)
            setNavmiddle(true)
            setScrollSearch(true)
            
        }
        else{
            setHomeNav(false)
            setLogo(false)
            setGlobe(false)
            setBecomeHost(false)
            setLowerHead(false)
            setNavmiddle(false)
            setScrollSearch(false)
        }
    }
    
    window.addEventListener("scroll",changeNavbar);

     const styles = {
        C1: "right_nav",
        C2: "active",        
      }



  return (
    <>
        <div className={homeNav?"navbar active":"navbar"}>
                <div className="upper_header">
                        <div style={{marginLeft:"-1%",marginTop:"1%"}}>
                            <div className={airbnb_logo?"logo active":"logo"}></div>
                        </div>
                        <div className={navmiddle?"navmiddle active":"navmiddle"}>
                            <p>Places to stay</p>
                            <p>Experiences</p>
                            <p>Online Experiences</p>
                        </div>

                        <div className={scroll_search?"after_scroll_search active":"after_scroll_search"}>
                            <p>Start your search</p>
                            <span className="search_nav_scroll">
                                <img className="search_icon_scroll" src="https://hamariweb.com/names/img/search_light.png" width="15px" height="15px"></img>
                            </span>
                        </div>
                        
                        <div className={become_host?`${styles.C2} ${styles.C1}`:`${styles.C1}`}>
                            <p className={lower_head?"host_decoration active":"host_decoration"}>Become a host</p>
                            <div className={globe_icon?"globe_logo active":"globe_logo"}></div>

                            <Hamwrapper>
                                <div>
                                    <img style={{paddingTop:"10px",marginLeft:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2qzjGHx362VfxQWKWwi2GCEoyqUnsRIm9jEF2oIlWx6Z76KjowacdQTq8s4UfonUSnA&usqp=CAU" width="20px"></img>
                                </div>
                                <div>
                                    <img style={{borderRadius:"50%"}} src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg" width="39px" height="36px"></img>
                                </div>
                            </Hamwrapper>


                        </div>
                </div>

                <div className={lower_head?"lower_header active":"lower_header"}>
                    <div className="location_nav">
                        <p>Location</p>
                        <p>Where are you going?</p>
                    </div>
                    <div>
                        <p>Check in</p>
                        <p>Add dates</p>
                    </div>
                    <div>
                    <p>Check out</p>
                        <p>Add dates</p>
                    </div>
                    <div>
                    <p>Guests</p>
                        <p>Add guests</p>
                    </div>
                    <span className="search_nav">
                        <img className="search_icon" src="https://hamariweb.com/names/img/search_light.png" width="20px" height="20px"></img>
                    </span>
                </div>
        </div>
    </>
  )
}
