import React from 'react'
import Product from './Product'
import q1 from '../images/q1.jpeg'
import q2 from '../images/q2.jpeg'
import q3 from '../images/q3.jpeg'
import q4 from '../images/q4.jpeg'
import q5 from '../images/q5.jpeg'
import q6 from '../images/q6.jpeg'
import q7 from '../images/q7.jpeg'
import q8 from '../images/q8.jpeg'
function Homeswings() {
    return (
        <div>
            <div className="home-1">
                <div className="hom-1"><Product img={q1} Model="Swingzy Rectangle-Shape Swing Chair Hanging Polyester Large Swing  (Black, DIY(Do-It-Yourself))" Price="₹2,890" delivary="Hurry, Only a few left!" /></div>
                <div className="hom-1"><Product img={q2} Model="Curio Centre Round Cotton Large Swing  (White, Pre-assembled)" Price="₹1,190" delivary="Extra ₹100 off" /></div>
                <div className="hom-1"><Product img={q3} Model="Prism Enterprise swing small jula Cotton Small Swing  (Blue, Pre-assembled)" Price="₹310" delivary="" /></div>
                <div className="hom-1"><Product img={q4} Model="hatke dukan Cotton Swing for Kids Baby Cotton Small Swing  (Multicolor, Pre-assembled)" Price="₹304" delivary="" /></div>

            </div>
            <div className="home-1">
                <div className="hom-1"><Product img={q5} Model="Furniture kart Swing Chair Jhula Iron Hammock  (Black, Red, Pre-assembled)" Price="₹7,499" delivary="Extra ₹500 off" /></div>
                <div className="hom-1"><Product img={q6} Model="Swingzy Round Swing Accessories & L-Cushion Cotton Large Swing  (Black, DIY(Do-It-Yourself))" Price="₹1,890" delivary="Hurry, Only 6 left!" /></div>
                <div className="hom-1"><Product img={q7} Model="Furniture kart Swing Chair Jhula Iron Hammock  (Pink, Pre-assembled)" Price="₹7,499" delivary="Hurry, Only a few left!" /></div>
                <div className="hom-1"><Product img={q8} Model="Furniture kart Steel Large Swing  (Black, DIY(Do-It-Yourself))" Price="₹11,249" delivary="Hurry, Only a few left!" /></div>

            </div>
        </div>
    )
}

export default Homeswings
