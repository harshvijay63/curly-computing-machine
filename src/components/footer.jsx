import React from 'react'
import '../styles/main.css'
import logo from "../assets/logo.png"
import f1 from "../assets/f1.png"
import f2 from "../assets/f2.png"

const footer = () => {
  return (
    <>
    <footer id = "light">
      <div className="f1">
        <img src={logo} alt="" />
      </div>
      <div className="f2">
        <div className="f21">
          <input type="text" placeholder='Enter your e-mail...' />
          <a href="/">SUBSCRIBE US <i class="fa-solid fa-square-arrow-up-right"></i></a>
        </div>
        <hr />
        <div className="f22">
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-facebook-f"></i>
        </div>
      </div>
      <div className="f3">
        <img className="f31" src={f1} alt="" />
        <p>© 2024 <b>Kunal Enterprise.  </b>   All rights reserved.</p>
        <img className='f32' src={f2} alt="" />
      </div>
    </footer>
    </>
    )
}

export default footer;