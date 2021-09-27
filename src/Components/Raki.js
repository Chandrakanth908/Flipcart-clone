import React from 'react'
import Product from './Product'
import r1 from '../images/r1.jpeg'
import r2 from '../images/r2.jpeg'
import r3 from '../images/r3.jpeg'
import r4 from '../images/r4.jpeg'
import r5 from '../images/r5.jpeg'
import r6 from '../images/r6.jpeg'
import r7 from '../images/r7.jpeg'
import r8 from '../images/r8.jpeg'
function Raki() {
    return (
        <div>
            <div className="home-1">
                <div className="hom-1"><Product img={r1}  Model="Religious Mug Set" Price="₹299" delivary="78% off"/></div>
                <div className="hom-1"><Product img={r2}  Model="Designer Rakhi, Chawal Roli Pack, Greeting Card, Mug Set  (2 Rakhi, 1 Mug, 1 Roli & Chawal, 1 Card)" Price="₹239" delivary="60% off"/></div>
                <div className="hom-1"><Product img={r3}  Model="Rudraksh Rakhi, Chawal Roli Pack Set  (1 Rakhi, 1 Roli chawal)" Price="₹199" delivary="Special price"/></div>
                <div className="hom-1"><Product img={r4}  Model="Ferns N Petals White & Red Pearl Rakhi With Dairy Milk Crackle Chocolate MP-114 | Gift for Brother| Rakhi for Brother| Rakhi Gift| Rakhi Combo Assorted Gift Box  (Multicolor)" Price="₹299" delivary="Hurry, Only a few left!"/></div>
                         
           </div>
           <div className='home-1'>
           <div className="hom-1"><Product img={r5}  Model="Designer Rakhi, Chawal Roli Pack, Greeting Card, Mug Set  (2 Rakhi, 1 Mug, 1 Roli & Chawal, 1 Card)" Price="₹239" delivary="Hurry, Only 5 left!"/></div>
           <div className="hom-1"><Product img={r6}  Model="Designer Mug Set  (1 mug, 1 rakhi)" Price="₹216" delivary="Be the first to Review this product"/></div>
           <div className="hom-1"><Product img={r7}  Model="Designer Pen Set  (2 Pen, 1 Rakhi)" Price="₹299" delivary=""/></div>
           <div className="hom-1"><Product img={r8}  Model="Designer Mug Set  (1 Designer Rakhi, Roli Chawal, 1 Rakshabandhan Special Coffee Mug)" Price="₹199" delivary="TIED RIBBONS "/></div>
           </div>
        </div>
    )
}

export default Raki
