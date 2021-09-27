import React from 'react'
import Product from './Product'
import i1 from '../images/i1.jpeg'
import i2 from '../images/i2.jpeg'
import i3 from '../images/i3.jpeg'
import i4 from '../images/i4.jpeg'

function Fish() {
    return (
        <div>
            <div className="home-1">
                <div className="hom-1"><Product img={i1} Model="Petzlifeworld Double House Betta Tank Small Fish Tank for Fighter Fish Rectangle Aquarium Tank  (1 L)" Price="₹355" delivary="Be the first to Review this product" /></div>
                <div className="hom-1"><Product img={i2} Model="Petzlifeworld 15 Inch Acrylic Wall Hanging Bowl for Fish and Plants Round Ends Aquarium Tank  (5 L)" Price="₹1,299" delivary="Extra ₹200 off" /></div>
                <div className="hom-1"><Product img={i3} Model="PREMIER PLANTS K4 Rectangle Aquarium Tank  (1 L)" Price="₹415" delivary="Be the first to Review this product" /></div>
                <div className="hom-1"><Product img={i4} Model="COMBINED ASSOCIATES 002 Round Ends Aquarium Tank  (2 L)" Price="₹267" delivary="" /></div>

            </div>
        </div>
    )
}

export default Fish
