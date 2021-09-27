import React from 'react'
import Product from './Product'
import t1 from '../images/t1.jpeg'
import t2 from '../images/t2.jpeg'
import t3 from '../images/t3.jpeg'
import t4 from '../images/t4.jpeg'
import t5 from '../images/t5.jpeg'
import t6 from '../images/t6.jpeg'
import t7 from '../images/t7.jpeg'
import t8 from '../images/t8.jpeg'
function Temples() {
    return (
        <div>
            <div className="home-1">
                <div className="hom-1"><Product img={t1}  Model="CRAFTSFORT Solid Wood Home Temple  (Height: 55, Pre-assembled)" Price="₹2,294" delivary="Extra ₹405 offends in less than03h:15m:50s"/></div>
                <div className="hom-1"><Product img={t2}  Model="CRAFTSFORT (Mandir) Temple for Home Pooja, Arti Solid Wood Home Temple  (Height: 76, Pre-assembled)" Price="₹4,249" delivary="Hurry, Only a few left!"/></div>
                <div className="hom-1"><Product img={t3}  Model="Chhariya Crafts Metal Krishna Sihasan, Laddu Gopal Singhasan For Home And Office Metal Home Temple" Price="₹349" delivary="65% off"/></div>
                <div className="hom-1"><Product img={t4}  Model="Remino beautiful wooden Plywood Mandir for Pooja Home Decoration Wall Hanging Beautiful Engineered Wood Home Temple  " Price="₹699" delivary="61% off"/></div>
                          
           </div>
            <div className="home-1">
                <div className="hom-1"><Product img={t5}  Model="ABLOOM ABLM 7 Metal Home Temple  (Height: 17, Pre-assembled)" Price="₹460" delivary="76% off"/></div>
                <div className="hom-1"><Product img={t6}  Model="NAVRANG Wooden Meenakari Singhasan for God Laddu Gopal Sinhasan for Pooja Mandir Solid Wood, Engineered Wood Home Temple  (Height: 15, Pre-assembled)" Price="₹339" delivary=""/></div>
                <div className="hom-1"><Product img={t7}  Model="Miranshi Enterprise Wooden Temple ROYAL LOOK WALL TEMPLE TRIANGLE HOME TEMPLE" Price="₹999" delivary="Hurry, Only a few left!"/></div>
                <div className="hom-1"><Product img={t8}  Model="kamdhenu art and craft Solid Wood Home Temple  (Height: 60, Knock Down)
" Price="₹2,944" delivary="Extra ₹155 offends in less than01h:53m:52s"/></div>
                          
           </div>
        </div>
    )
}

export default Temples
