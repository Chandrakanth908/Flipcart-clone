import React from 'react'
import './Blankets.css'
import Product from './Product'

import b1 from '../images/b1.jpeg'
import b2 from '../images/b2.jpeg'
import b3 from '../images/b3.jpeg'
import b4 from '../images/b4.jpeg'
import b5 from '../images/b5.jpeg'
import b6 from '../images/b6.jpeg'
import b7 from '../images/b7.jpeg'
import b8 from '../images/b8.jpeg'
function Blankets() {
    return (
        <div>
            <div className="home-1">
                <div className="hom-1"><Product img={b1}  Model="bomen Fit and Flare Multicolor Dress " Price="₹897" delivary="Size :S,M,L"/></div>
                <div className="hom-1"><Product img={b2}  Model="bomen Skater Black Dress " Price="Rs 17,490.00" delivary="Size :S,M,L"/></div>
                <div className="hom-1"><Product img={b3}  Model="Minnie Girls Midi/Knee Length Casual Dress  " Price="Rs 17,490.00" delivary="Size :S,M,L"/></div>
                <div className="hom-1"><Product img={b4}  Model="bomen A-line Maroon Dress " Price="Rs 17,490.00" delivary="Size :S,M,L"/></div>
                                 
            </div>
            <div className="home-1">
                <div className="hom-1"><Product img={b5}  Model="bomen A-line Multicolor Dress " Price="₹897" delivary="Size :S,M,L"/></div>
                <div className="hom-1"><Product img={b6}  Model="bomen Shirt Blue Dress " Price="Rs 17,490.00" delivary="Size :S,M,L"/></div>
                <div className="hom-1"><Product img={b7}  Model="bomen Fit and Flare Beige, Black Dress " Price="Rs 17,490.00" delivary="Size :S,M,L"/></div>
                <div className="hom-1"><Product img={b8}  Model="Below Knee Casual Dress  (Yellow, Sleeveless) " Price="Rs 17,490.00" delivary="Size :S,M,L"/></div>
                                 
            </div>
        </div>
    )
}

export default Blankets
