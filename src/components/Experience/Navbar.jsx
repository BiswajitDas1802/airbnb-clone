import React from 'react'
import { lonavla,offbeat,pool,beach,cabins,tiny,tree } from './Hotelcardsapi'
import './style.css'
const Navbar = ({filterItem }) => {
  
  return (
    <>
     <nav className="navbar">
        <div className="btn-group">
          
              <button
                className="btn-group__item"
               onClick = {()=>filterItem(lonavla)}
                >
                Farm
              </button>
              <button
                className="btn-group__item"
                onClick = {()=>filterItem(beach)}
                >
                
                Beachfrontarm
                
              </button>
              <button
                className="btn-group__item"
                onClick = {()=>filterItem(pool)}
                >
                Amazing pools
              </button>
              <button
                className="btn-group__item"
                onClick = {()=>filterItem(offbeat)}
                >
                Offbeat
              </button>
              <button
                className="btn-group__item"
                onClick = {()=>filterItem(cabins)}
                >
                Cabins
              </button>
              <button
                className="btn-group__item"
                onClick = {()=>filterItem(tiny)}
                >
                Tiny homes
              </button>
              <button
                className="btn-group__item"
                onClick = {()=>filterItem(tree)}
                >
                Tree houses
              </button>
              <button
                className="btn-group__item"
               
                >
                More
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button
                className="btn-group__item"
                >
             Anytime 
              </button>
              <button
                className="btn-group__item"
                >
             Guests
              </button>
        </div>
      </nav>
    </>
  )
}

export {Navbar}