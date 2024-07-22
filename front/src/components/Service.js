import React from 'react'

//import { Link, NavLink } from "react-router-dom"
import './Allcss/service.css'
import Mugadisho from './Assets/low.jpg'
import sanaag from './Assets/zebras.jpg'
import hargaysa from './Assets/hargaysa.jpg'
import { useParams } from 'react-router-dom'

import { useNavigate } from "react-router-dom"



//import img1 from './assets/imagesSystem/images/1.png'
// C:\Users\hp\Desktop\UseRef\front\src\assets\imagesSystem\images\1.png



export const Service = () => {
  const navigate =  useNavigate()
    const {localCities} = useParams()
    return (
      <div>
        <div className='Wrapper'>
          
          <div className='ContainerA'>
          <h3 className='textA'>Hargaysa City, {localCities} <button className='btn1'>Price $$$</button></h3>
          <img src={hargaysa} className='n33' alt=''/>
          </div>
          <div className='ContainerA'>
          <h3 className='textcities'>Mugadisho City {localCities} <div className="contaner-btn">
          <span className="btn1"><button onClick={()=> navigate('service:localcities')}>Gujji halkaan</button></span>
        </div></h3>
          <img src={Mugadisho} className='n33' alt=''/>
          </div>
          <div className='ContainerA'>
          <h3 className='textA'>Urben Sanaag  {localCities} <button className='btn1'>Price $$$</button></h3>
          <img src={sanaag} className='n33' alt=''/>
          </div>
          </div>



          <div>
            <h4>
            Discover the hidden gems of the world with our exclusive tourism packages! Embark on a journey filled with breathtaking landscapes, rich cultural heritage, and unforgettable adventures. Whether you're seeking the serene beauty of pristine beaches,
            the thrill of mountain expeditions, or the allure of historical cities,
            we have the perfect getaway for you. Our expert guides and personalized itineraries ensure an experience like no other.
            Pack your bags, leave the ordinary behind, and step into a world of wonder. Your dream vacation awaits—book now and create memories that will last a lifetime!



            </h4>
          </div>


      </div>

      /* <div className="contaner-btn">
          <span className="btn1"><button onClick={()=> navigate('ordersummery',)}>Login</button></span>
        </div> */
        /* qaybti hore */


      // <div className='cityBoday'>
        // <div className='ContainerXamar'>
        // <h3 className='textcities'>Mugadisho City {localCities} <button className='btnCity'>click here</button></h3>
        // <img src={Num} className='n33' alt=''/>
        // </div>
      //   <div className='textcities'>
      //   <div className='ContainerXamar'>
      //   <h3 className='textcities'>Hargaysa City {localCities}
      //     <button className='btnCity'>click here</button>
      //   </h3>
      //   <img src={hargaysa} className='n33' alt=''/>
      //   </div>
      //   </div>
      //   <div>
      //   <h3 className='textcities'> CeeriGaabo{localCities}</h3>
      //   </div>
      //   <div>
      //   <h3 className='textcities'>Laascaanood{localCities}</h3>
      //   </div>
      //   <div>
      //   <h3 className='textcities'>Hargayza{localCities}</h3>
      //   </div>

      // </div>
    
      
      

     
    )
  }
  