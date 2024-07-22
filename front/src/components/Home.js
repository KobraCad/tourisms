//import React from 'react'
import { useNavigate } from "react-router-dom"
import Mal from "./Allcss/maldives.jpg"
import img2 from './Assets/logoTravel.jpg'
import LoginForm from "./LoginForm"



import "./Allcss/Home.css"
export const Home = () => { 
   const navigate =  useNavigate()
  return (
    <>

    <div className="">
    </div> 
      <div className="header1"><header className="h-content">Explore the World with Us</header></div>
      <h4>Discover the hidden gems of the world with our exclusive tourism packages!
        Embark on a journey filled with breathtaking landscapes,</h4>
      <div className="divMald">
        <span className="Mal"><img src={Mal}  alt="" className="mald"/> </span> 
        <LoginForm/>
        {/* qaybti hore */}
        {/* <div className="contaner-btn">
          <span className="btn1"><button onClick={()=> navigate('ordersummery',)}>Login</button></span>
        </div> */}
        {/* qaybti hore */}
     </div>
        
   
    </>
  )
}
