import React from 'react';
import s41 from "../assets/s41.png";
import s51 from "../assets/s51.png";
import s52 from "../assets/s52.png";
import s53 from "../assets/s53.png";
import s54 from "../assets/s54.png";


const Connect = () => {
    return (
<>


<section>
        <div className="hp-s4">
          <img src={s41} alt="" />
        </div>
      </section>

      <section>
        <section id="about-us">
          <div className="hp-s5">
            <div className="hp-s51">
              <i class="fa-brands fa-instagram"></i>
              <a href="/">@kunal_Enterprise</a>
                div className="follow">
              <p>FOLLOW US ON INSTAGRAM</p> </div>
            </div>
            <div className="hp-s52">
              <div className="hp-s53">
                <img src={s51} alt="" />
                <img src={s52} alt="" />
              </div>
              <div className="hp-s53">
                <img src={s53} alt="" />
                <img src={s54} alt="" />
              </div>
            </div>
          </div>
        </section>
      </section>
</>
);
};


export default Connect;
