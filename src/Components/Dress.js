import React from 'react'
import './Dress.css'
import Product from '../Components/Product'
import w1 from '../images/w1.jpeg'
import w2 from '../images/w2.jpeg'
import w3 from '../images/w3.jpeg'
import w4 from '../images/w4.jpeg'
import w5 from '../images/w5.jpeg'
import w6 from '../images/w6.jpeg'
import w7 from '../images/w7.jpeg'
import w8 from '../images/w8.jpeg'

function Dress() {
    return (
        <div>
            <div className="home-1">
                <div className="hom-1"><Product img={w1}  Model="Women Fit and Flare Multicolor Dress " Price="₹897" delivary="Size :S,M,L"/></div>
                <div className="hom-1"><Product img={w2}  Model="Women Skater Black Dress " Price="₹ 17,490.00" delivary="Size :S,M,L"/></div>
                <div className="hom-1"><Product img={w3}  Model="Minnie Girls Midi/Knee Length Casual Dress  " Price="₹ 17,490.00" delivary="Size :S,M,L"/></div>
                <div className="hom-1"><Product img={w4}  Model="Women A-line Maroon Dress " Price="₹ 17,490.00" delivary="Size :S,M,L"/></div>
                                 
            </div>
            <div className="home-1">
                <div className="hom-1"><Product img={w5}  Model="Women A-line Multicolor Dress " Price="₹897" delivary="Size :S,M,L"/></div>
                <div className="hom-1"><Product img={w6}  Model="Women Shirt Blue Dress " Price="₹ 17,490.00" delivary="Size :S,M,L"/></div>
                <div className="hom-1"><Product img={w7}  Model="Women Fit and Flare Beige, Black Dress " Price="₹ 17,490.00" delivary="Size :S,M,L"/></div>
                <div className="hom-1"><Product img={w8}  Model="Below Knee Casual Dress  (Yellow, Sleeveless) " Price="₹ 17,490.00" delivary="Size :S,M,L"/></div>
                                 
            </div>
            
        </div>
    )
}

export default Dress
