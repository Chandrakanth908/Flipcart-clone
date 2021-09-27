import React from 'react'
import Product from './Product'

import p1 from '../images/p1.jpeg'
import p2 from '../images/p2.jpeg'
import p3 from '../images/p3.jpeg'
import p4 from '../images/p4.jpeg'
import p5 from '../images/p5.jpeg'
import p6 from '../images/p6.jpeg'
import p7 from '../images/p7.jpeg'
import p8 from '../images/p8.jpeg'
function Powertools() {
    return (
        <div>
            <div className="home-1">
                <div className="hom-1"><Product img={p1}  Model="BOSCH GSB 600 RE Drill Power & Hand Tool Kit  (13 Tools) " Price="₹5,199  " delivary="Buy More Save More"/></div>
                <div className="hom-1"><Product img={p2}  Model="VISKO Hand Tool Kit  (22 Tools)" Price="₹694" delivary="Buy More Save More"/></div>
                <div className="hom-1"><Product img={p3}  Model="emicient EMICIENT897 ERG Power & Hand Tool Kit  (40 Tools) " Price="₹369" delivary="Buy More Save More"/></div>
                <div className="hom-1"><Product img={p4}  Model="BOSCH GSB 10 RE Kit Power & Hand Tool Kit  (100 Tools)" Price="₹3,899" delivary="Buy More Save More"/></div>
                                 
            </div>
            <div className="home-1">
                <div className="hom-1"><Product img={p5}  Model="Hillgrove Hand Tool Kit  (8 Tools) " Price="₹552" delivary="Buy More Save More"/></div>
                <div className="hom-1"><Product img={p6}  Model="BOSCH Hand Tool Kit  (12 Tools) " Price="₹1,299" delivary="Buy More Save More"/></div>
                <div className="hom-1"><Product img={p7}  Model="STANLEY Power & Hand Tool Kit  (100 Tools) " Price="₹3,549" delivary="Buy More Save More"/></div>
                <div className="hom-1"><Product img={p8}  Model="FOSTER FHT 904 Hand Tool Kit  (35 Tools) " Price="₹1,449" delivary="Buy More Save More"/></div>
                                 
            </div>
        </div>
    )
}

export default Powertools
