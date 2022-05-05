import React from 'react'
import { Footer } from '../Footer/footer';
import "./Host.css";
import { Link } from 'react-router-dom';


export const Host=()=>{
    return(
    <>
    <div id="host_header">
        <div id="left_header">
               <Link to="/"> <img  src="https://freepikpsd.com/file/2019/10/airbnb-logo-white-png-4-Transparent-Images.png" width="90px" height="65px"></img></Link>
                <p>Hosting</p>
                <p>makes Airbnb,</p>
                <p>Airbnb</p>
                <button>Try hosting</button>
                <img style={{display:"block",margin:"auto",marginTop:"10%"}} src="http://dmconsulting.net/wp-content/uploads/2017/09/Drop-down-arrow-icon-rounded.png" width="15px" height="15px"></img>
        </div>
        <div id="header_image">
        </div>
    </div>

    <div id="host_anything">
        <p>You can host anything, anywhere</p>
        <div id="anything_anywhere_photos">
            <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BMQEAAADCoPVP7WULoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuxZIAAeHuCGgAAAAASUVORK5CYII=" width="450px"></img>
            </div>
            <div id="image_container">
            <img id="image_shadow" src="https://a0.muscache.com/im/pictures/4f3047b2-58ea-4335-8430-dfc6f436634d.jpg?im_w=720"></img>
            <p id="image_about">Hosting my studio changed my life and gifted me with memorable experiences and people.</p>
            <img src="https://a0.muscache.com/im/pictures/f2b0e082-6872-47a3-a9f6-d01a9c44a088.jpg?im_w=240" width="15%"></img>
            <p>Host in Milan</p>
            </div>
            <div id="image_container">
            <img id="image_shadow" src="https://a0.muscache.com/im/pictures/31fb3cb1-c2a1-4e14-a9e9-6f279991790b.jpg?im_w=720"></img>
            <p id="image_about">Hosting my home allowed me to become an entrepreneur and laid down a path to financial freedom.</p>
            <img src="https://a0.muscache.com/im/pictures/b0123613-6e48-4108-af8b-bb2d347b4de8.jpg?im_w=240" width="25%"></img>
            <p>Host in Atlanta</p>
            </div>
            <div id="image_container">
            <img id="image_shadow" src="https://a0.muscache.com/im/pictures/a464d642-695e-4d2c-aa51-2302de067f45.jpg?im_w=720" alt="" />
            <p id="image_about">We’re able to keep our culture alive by hosting our pasta-making experience.</p>
            <img src="https://a0.muscache.com/im/pictures/4314911d-559f-4fc7-a493-2edce264d839.jpg?im_w=240" width="20%"></img>
            <p>Host in Palombara Sabina</p>
            </div>
            <div id="image_container">
            <img id="image_shadow" src="https://a0.muscache.com/im/pictures/d8627b07-b42c-40a1-807f-1eac9de39311.jpg?im_w=720" alt="" />
            <p id="image_about">Airbnb has allowed me to create my own job doing what I love – taking care of guests in our home.</p>
            <img src="https://a0.muscache.com/im/pictures/80b16be2-f6bf-4a68-846f-b35d4b85c455.jpg?im_w=240" width="15%"></img>
            <p>Host in Chiang Mai</p>
            </div>
            <div id="image_container">
            <img id="image_shadow" src="https://img.haarets.co.il/img/1.10675791/1937526617.jpg" alt="" />
            <p id="image_about">Hosting my Bedouin tent has introduced me to people around the world.</p>
            <img src="https://a0.muscache.com/im/pictures/82a3e33e-a83e-49e8-b642-0de04018075b.jpg?im_w=240" width="30%"></img>
            <p>Host in Wadi Rum</p>
            </div>
            <div id="image_container">
            <img id="image_shadow" src="https://freight.cargo.site/w/600/q/75/i/ccc8a4bb4586e6f524ae8e422ecda7d20ab215eaac5bd600e444ecefab2a373a/PJM025619Q104-0477-Edit.jpg"></img>
            <p id="image_about">I love hosting my eco-home so people can connect with nature and their loved ones.</p>
            <img src="https://a0.muscache.com/im/pictures/62dccc5f-5fa6-4e24-8406-8ced33d1c403.jpg?im_w=240" width="25%"></img>
            <p>Host in Paraty</p>
            </div>
            <img style={{paddingRight:"140px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BMQEAAADCoPVP7WULoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuxZIAAeHuCGgAAAAASUVORK5CYII=" width="600px"></img>
        </div>
        <div  id="hide_about">
            <div style={{backgroundColor:"white",marginTop:"10px"}}></div>
            <div style={{backgroundColor:"white",marginTop:"10px"}}></div>
            <div style={{backgroundColor:"white",marginTop:"10px"}}></div>
            <div></div>
            <div style={{marginTop:"10px"}}></div>
            <div style={{marginTop:"10px"}}></div>
            <div style={{marginTop:"10px"}}></div>
        </div>

        <div id="earning">
            <div>
            <p style={{marginLeft:"15%"}}>Host your</p>
            <select>
                <option id="ganaura_option">shared room</option>
                <option id="ganaura_option">entire place</option>
                <option id="ganaura_option">shared room</option>
            </select>
            <p style={{marginLeft:"-1px"}}>for</p>
            <select style={{marginRight:"100px"}}>
                <option id="ganaura_option">4 guests</option>
                <option id="ganaura_option">1 guest</option>
                <option id="ganaura_option">2 guests</option>
                <option id="ganaura_option">3 guests</option>
                <option id="ganaura_option">4 guests</option>
                <option id="ganaura_option">5 guests</option>
                <option id="ganaura_option">6 guests</option>
                <option id="ganaura_option">7 guests</option>
                <option id="ganaura_option">8 guests</option>
                <option id="ganaura_option">9 guests</option>
                <option id="ganaura_option">10 guests</option>
                <option id="ganaura_option">11 guests</option>
                <option id="ganaura_option">12 guests</option>
                <option id="ganaura_option">13 guests</option>
                <option id="ganaura_option">14 guests</option>
                <option id="ganaura_option">15 guests</option>
                <option id="ganaura_option">16 guests</option>
            </select>
            </div>
            <div id="second_line">
                <p style={{marginRight:"300px"}}>in</p>
                <select style={{marginRight:"30%"}}>
                    <option id="ganaura_option">Ganaur</option>
                    <option id="ganaura_option">Gurgaon</option>
                    <option id="ganaura_option">Panipat</option>
                </select>
            </div>
            <div>
                <p id="third_line">and earn upto ₹5,484/month</p>
            </div>
        </div>
    </div>
    <p id="earning_potential">How we estimate your earning potential</p>
    <div id="Question_hosting">
        <div id="leave_space"></div>
        <p>Questions about hosting?</p>
        <p>Ask a Superhost.</p>
        <button>Learn more</button>
    </div>
    <div id="aircover">
        <div>
            <img src="https://a0.muscache.com/pictures/7fea934d-f697-4c8f-8326-d1ae2925f4ad.jpg" width="100%"></img>
            <p id="a_top">Top-to-bottom protection.</p>
            <p>Free for Hosts. Only on Airbnb</p>
            <button>Explore AirCover</button>
        </div>
        <div id="a_sofa">
            <img src="https://a0.muscache.com/im/pictures/11e10d64-867e-4dba-b0b4-896026a4f0e0.jpg?im_w=2560&im_q=highq" width="100%"></img>
        </div>
    </div>

    <div id="try_hosting">
        <div className="denim">
        </div>
        <div>
        <p>Try hosting on Airbnb</p>
            <p>Join up. We'll help you every step of the way.</p>
            <button>Let's go!</button>
        </div>
    </div>
    <div id="fixed_box_bottom">
        <button id="fixed_hosting_button">Try Hosting</button>
    </div>
    <Footer/>
    </>
    )}