import React from 'react'
import Product from './Product'
import m1 from '../images/m1.jpeg'
import m2 from '../images/m2.jpeg'
import m3 from '../images/m3.jpeg'
import m4 from '../images/m4.jpeg'
import m5 from '../images/m5.jpeg'
import m6 from '../images/m6.jpeg'
import m7 from '../images/m7.jpeg'
import m8 from '../images/m8.jpeg'
function Mobiles() {
    return (
        <div>
            <div className="home-1">
                <div className="hom-1"><Product img={m1}  Model="POCO M3 (Power Black, 64 GB)  (6 GB RAM)" Price="₹11,999" delivary="Extra ₹1000 off"/></div>
                <div className="hom-1"><Product img={m2}  Model="Infinix Hot 10S (7° Purple, 64 GB)  (6 GB RAM" Price="₹10,999" delivary="Extra ₹3000 off"/></div>
                <div className="hom-1"><Product img={m3}  Model="realme Narzo 30 5G (Racing Silver, 128 GB)  (6 GB RAM)" Price="₹15,999" delivary="Extra ₹2000 off"/></div>
                <div className="hom-1"><Product img={m4}  Model="REDMI 9 Power (Mighty Black, 128 GB)  (6 GB RAM)" Price="₹13,499" delivary="Extra ₹3500 off"/></div>           
           </div>
            <div className="home-1">
                <div className="hom-1"><Product img={m5}  Model="realme 8 5G (Supersonic Black, 128 GB)  (8 GB RAM)" Price="₹16,999" delivary="Extra ₹2000 off"/></div>
                <div className="hom-1"><Product img={m6}  Model="OPPO A53 (Mint Cream, 128 GB)  (6 GB RAM)" Price="₹13,990" delivary="Extra ₹4000 off"/></div>
                <div className="hom-1"><Product img={m7}  Model="realme Narzo 30 (Racing Blue, 128 GB)  (6 GB RAM)" Price="₹14,999" delivary="Extra ₹2000 off"/></div>
                <div className="hom-1"><Product img={m8}  Model="OPPO A53s 5G (Ink Black, 128 GB)  (6 GB RAM)" Price="₹15,990" delivary="Extra ₹1000 off"/></div>       
            </div>
            
        </div>
    )
}

export default Mobiles
