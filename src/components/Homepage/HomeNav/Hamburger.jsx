import React from 'react'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Singup } from '../LoginSignup/Signup';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signout,auth } from '../../../firebase';
import { googleSignOut } from '../../../redux/action';

export const Hamburger = () => {

  const LogInstyle = {
    position: "absolute",
    left: "20%",
    width: "50%",
    height: "auto",
    marginTop:"10px",
    bgcolor: "background.paper",
    borderRadius:"10px",
    fontFamily: "sans-serif",
    maxHeight: "1024px",
    overflowX: "hidden",
    transform: "none",
    transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    paddingLeft: "10px",
  };  

  const [displayLogIn, setDisplayLogIn] = useState(false);
  const userr = useSelector(state=>state.currUser)
  const [user,setUser] = useState(userr);
  console.log(user)
    const  handleLogInPopin =()=> setDisplayLogIn(true);
    const  handleLogInPopout =()=> setDisplayLogIn(false);
    const dispatch = useDispatch()

  return (
    <div>
        {userr?<p onClick={()=>{dispatch(googleSignOut())
          handleHamPopout()
        }} style={{cursor:"pointer"}}><b>LogOut</b></p>:<p onClick={handleLogInPopin} style={{cursor:"pointer"}}><b>SignUp</b></p>}
        {userr?"":<p onClick={handleLogInPopin} style={{cursor:"pointer"}}>Login</p>}
            <hr/>
        <p>Host your home</p>
        <p>Host an experience</p>
        <p>Help</p>

        <Modal
            open={displayLogIn}
            onClose={handleLogInPopout} 
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={LogInstyle}>
            <button style={{border:"none", fontSize:"20px", backgroundColor:"transparent"}} onClick={handleLogInPopout}>X</button>
              <Singup />
            </Box>
        </Modal>
    </div>
  )
}
