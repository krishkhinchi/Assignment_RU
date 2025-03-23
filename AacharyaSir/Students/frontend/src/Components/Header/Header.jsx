import React from 'react'
import "./Header.css"
import { useNavigate } from "react-router-dom";

function Header() {
  const Navigate = useNavigate();
  return (
    <>
    <div id='MainHeader'>
      <nav>
        <button onClick={()=> Navigate("/")} className="btn1InHeader">Home</button>
        <button onClick={()=> Navigate("/Students")} className="btn2InHeader">Students</button>
        <button onClick={()=> Navigate("/Contact")} className="btn3InHeader">Contact US</button>
      </nav>
    </div>
    </>
  )
}

export default Header