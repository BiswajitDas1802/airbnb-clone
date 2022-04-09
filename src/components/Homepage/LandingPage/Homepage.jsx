import React from 'react'
import { Footer } from '../Footer/footer'
import Styles from "./Homepage.module.css"
import { HomeNav } from '../HomeNav/HomeNav'
import {useNavigate} from "react-router-dom"
import { searchHotel } from '../../../redux/action'
import { useDispatch,useSelector } from 'react-redux'
import {lonavla,Alibagh,karjat,Calangute} from '../../Mapwithhotels/star'


export const Homepage = () => {

const dispatch = useDispatch()
const navigate = useNavigate()
const handleNavigate =(data)=>{
    dispatch(searchHotel(data))
    navigate("/search")
}
const user = useSelector(state=>state.currUser)


  return (
    <>
        
          <div className={Styles.black_bg}>
            <div>
                <HomeNav/>
            </div>
              <div className={Styles.pink_highlight}>
                  <div className={Styles.pink_highlight_text}>
                    <p className={Styles.help_text}>Help house 100,000 refugees fleeing Ukraine</p>
                    <button className={Styles.learnmore_button}>Learn more</button>
                  </div>
              </div>

              <div className={Styles.flexible_box}>
                    <div className={Styles.flexible_text_box}>
                        <p className={Styles.flexible_text}>Let your curiosity do the booking</p>
                    </div>
                   
                    <div className={Styles.flexible_button_box}>
                      <h4 className={Styles.flexible_button}>I'm flexible</h4>
                    </div>
              </div>
          </div>

          {/* cards */}

        <div className={Styles.destination_container}>
            <p className={Styles.destination_heading}>Inspiration for your next trip</p>
            <div className={Styles.destination_cards}>
                <div onClick={()=>handleNavigate(lonavla)} className={Styles.single_card}>
                    <img className={Styles.card_image} src="https://a0.muscache.com/im/pictures/73250991-433e-4950-b7d1-59bba711bb57.jpg?im_w=480" width="100%"></img>
                    <div style={{backgroundColor:"#bc1a6e"}} className={Styles.card_color}>
                        <p className={Styles.destination_title}>Lonavla</p>
                        <p className={Styles.distance}>66 kilometers away</p>
                    </div>
                </div>
                <div onClick={()=>handleNavigate(Alibagh)} className={Styles.single_card}>
                <img className={Styles.card_image} src="https://a0.muscache.com/im/pictures/aef20929-0d6a-40e7-8ac9-321ff0edf8c9.jpg?im_w=480" width="100%"></img>
                <div style={{backgroundColor:"#cc2d4a"}} className={Styles.card_color}>
                        <p className={Styles.destination_title}>Alibagh</p>
                        <p className={Styles.distance}>37 kilometers away</p>
                    </div>
                </div>
                <div onClick={()=>handleNavigate(Calangute)} className={Styles.single_card}>
                <img className={Styles.card_image} src="https://a0.muscache.com/im/pictures/57d3fdbd-9dde-4b6f-98af-64d38d6ffd02.jpg?im_w=480" width="100%"></img>
                <div style={{backgroundColor:"#d93b30"}} className={Styles.card_color}>
                        <p className={Styles.destination_title}>Calangute</p>
                        <p className={Styles.distance}>396 kilometers away</p>
                    </div>
                </div>
                <div onClick={()=>handleNavigate(karjat)} className={Styles.single_card}>
                <img className={Styles.card_image} src="https://a0.muscache.com/im/pictures/cccdc2e6-e6dc-4706-b9d4-ee2a80115703.jpg?im_w=480" width="100%"></img>
                <div style={{backgroundColor:"#de3151"}} className={Styles.card_color}>
                        <p className={Styles.destination_title}>Karjat</p>
                        <p className={Styles.distance}>53 kilometers away</p>
                    </div>
                </div>

            </div>
        </div>

        <div>
            <p className={Styles.experiences_heading}>Discover Airbnb Experiences</p>
            <div className={Styles.experiences_box}>
                <div className={Styles.left_image}>
                    <p className={Styles.experiences_title}>Things to do on your trip</p>
                    <button className={Styles.experiences_button}>Experiences</button>
                </div>

                <div className={Styles.right_image}>
                    <p className={Styles.experiences_title}>Things to do from home</p>
                    <button className={Styles.experiences_button}>Online Experiences</button>
                </div>
            </div>
        </div>

        <div style={{marginBottom:"5%"}} className={Styles.question_box}>
            <div className={Styles.question_box_image}>
                <p className={Styles.question_title}>Questions about hosting?</p>
                <button className={Styles.superhost_button}>Ask a Superhost</button>
            </div>
        </div>


        <div>
            <Footer/>
        </div>

          
    </>      
  )
}
