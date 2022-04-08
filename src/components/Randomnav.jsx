import React from 'react'
import "./Homepage/HomeNav/HomeNav.css"
import Styled from "styled-components"

export const Randomnav = () => {
    const Hamwrapper = Styled.div`

    margin-top:7px;
    width:30%;
    height:73%;
    gap:10px;
    border-radius: 30px;
    background-color: white;
    border:1px solid transparent;
    display: flex;
    color:black;
    border:1px solid rgb(204, 195, 195);

    `
  return (
    <div className="upper_header">
        <div style={{marginLeft:"-1%",marginTop:"1%"}}>
                <div className="logo active"></div>
        </div>

        <div className="after_scroll_search active">
                <p>Start your search</p>
                <span className="search_nav_scroll">
                    <img className="search_icon_scroll" src="https://hamariweb.com/names/img/search_light.png" width="15px" height="15px"></img>
                </span>
        </div>


        <div className="right_nav active">
            <p className="host_decoration active">Become a host</p>
            <div className="globe_logo active">

             </div>

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
  )
}
