import React from 'react'
import { Footer } from '../Footer/footer';
import "./Host.css";


export const Host=()=>{
    return(
    <>
    <div id="host_header">
        <div id="left_header">
                <img src="data:image/png;base64,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" width="30px" height="30px"></img>
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
        <div id="hide_about">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div id="earning">
            <div>
            <p style={{marginLeft:"10%"}}>Host your</p>
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
                <p style={{marginRight:"280px"}}>in</p>
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
    <Footer/>
    </>
    )}