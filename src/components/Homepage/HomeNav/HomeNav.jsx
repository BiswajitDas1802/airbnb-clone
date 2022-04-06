import React from 'react'
import "./HomeNav.css"
import { useState } from 'react'

export const HomeNav = () => {

    const styles = {
        C1: "a_right_nav",
        C2: "active",        
      }

    const [navbar,setNavbar]=useState(false)
    const [air_logo,setLogo]=useState(false)
    const [globe,setGlobe]=useState(false)
    const [become_host,setBecomeHost]=useState(false)
    const [lower_head,setLowerHead]=useState(false)
    const [navmiddle,setNavmiddle]=useState(false)
    const [scroll_search,setScrollSearch]=useState(false)


    const changeNavbar=()=>{
        if(window.scrollY>=145){
            setNavbar(true)
            setLogo(true)
            setGlobe(true)
            setBecomeHost(true)
            setLowerHead(true)
            setNavmiddle(true)
            setScrollSearch(true)
            setHostNew(true)
        }
        else{
            setNavbar(false)
            setLogo(false)
            setGlobe(false)
            setBecomeHost(false)
            setLowerHead(false)
            setNavmiddle(false)
            setScrollSearch(false)
            setHostNew(false)
        }
    }
    
    window.addEventListener("scroll",changeNavbar)
  return (
    <>
        <div className={navbar?"navbar active":"navbar"}>
                <div className="a_upper_header">
                        <div style={{marginLeft:"-1%",marginTop:"1%"}}>
                            <div className={air_logo?"logo active":"logo"}></div>
                        </div>
                        <div className={navmiddle?"a_navmiddle active":"a_navmiddle"}>
                            <p>Places to stay</p>
                            <p>Experiences</p>
                            <p>Online Experiences</p>
                        </div>

                        <div className={scroll_search?"after_scroll_search active":"after_scroll_search"}>
                            <p>Start your search</p>
                            <span className="a_search_nav_scroll">
                                <img className="a_search_icon_scroll" src="https://hamariweb.com/names/img/search_light.png" width="15px" height="15px"></img>
                            </span>
                        </div>
                        
                        <div className={become_host?`${styles.C2} ${styles.C1}`:`${styles.C1}`}>
                            <p className={lower_head?"host_decoration active":"host_decoration"}>Become a host</p>
                            <div className={globe?"globe_logo active":"globe_logo"}></div>

                        </div>
                </div>

                
        </div>
    </>
  )
}
