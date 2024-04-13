import React from 'react';
import s12 from "../assets/s12.png";
import s13 from "../assets/s13.png";

const SectionNewArrival = () => {
    return (
        <section>
            <div className="hp-s1">
                <div className="hp-s13">
                    <img src={s13} alt="" />
                </div>
                <div className="hp-s11">
                    <h6>NEW ARRIVAL</h6>
                    <div className="hp-s111">
                        <h1>Pastel <br /> on Inspiron</h1>
                    </div>
                </div>
                <div className="hp-s12">
                    <img src={s12} alt="" />
                </div>
            </div>
        </section>
    );
};

export default SectionNewArrival;