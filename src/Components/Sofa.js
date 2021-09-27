import React from 'react'
import Product from './Product'
import x1 from '../images/x1.jpeg'
import x2 from '../images/x2.jpeg'
import x3 from '../images/x3.jpeg'
import x4 from '../images/x4.jpeg'
import x5 from '../images/x5.jpeg'
import x6 from '../images/x6.jpeg'
import x7 from '../images/x7.jpeg'
import x8 from '../images/x8.jpeg'
function Sofa() {
    return (
        <div>
            <div className="home-1">
                <div className="hom-1"><Product img={x1} Model="Bharat Lifestyle Tulip Fabric 3 Seater Sofa  (Finish Color - Black Grey, DIY(Do-It-Yourself))" Price="₹11,999" delivary="Delivery by11 Sep, Saturday|Free" /></div>
                <div className="hom-1"><Product img={x2} Model="Bharat Lifestyle Tulip311 Fabric 3 + 1 + 1 Brown Sofa Set  (Delivery condition - DIY(Do-It-Yourself))" Price="₹22,999" delivary="Delivery by11 Sep, Saturday|Free" /></div>
                <div className="hom-1"><Product img={x3} Model="Allie Wood Wooden (Sheesham)Sofa Set for Living Room (Brown Cushion) Fabric 3 + 1 + 1 Teak Finish Brown Cushion Sofa Set " Price="₹29,999" delivary="Hurry, Only a few left!" /></div>
                <div className="hom-1"><Product img={x4} Model="Nilkamal Goa Sofa Fabric 2 Seater Sofa  (Finish Color - Season Rust Brown, Knock Down)" Price="₹9,600" delivary="Hurry, Only 9 left!" /></div>

            </div>
            <div className="home-1">
                <div className="hom-1"><Product img={x5} Model="TREVI Madison Leatherette 3 Seater Sofa  (Finish Color - Black Leatherette, Knock Down)" Price="₹16,399" delivary="Delivery by11 Sep, Saturday|Free" /></div>
                <div className="hom-1"><Product img={x6} Model="MUEBLES CASA Marco Leatherette 6 Seater Sofa  (Finish Color - Beige, Knock Down)" Price="₹34,876" delivary="Delivery by11 Sep, Saturday|Free" /></div>
                <div className="hom-1"><Product img={x7} Model="Bharat Lifestyle Lexus Fabric 3 + 1 + 1 Light Grey Sofa Set  (Delivery condition - DIY(Do-It-Yourself))" Price="₹23,999" delivary="Delivery by11 Sep, Saturday|Free" /></div>
                <div className="hom-1"><Product img={x8} Model="Bharat Lifestyle Lexus Fabric 3 + 1 + 1 Dark Grey Sofa Set  (Delivery condition - DIY(Do-It-Yourself))" Price="₹23,999" delivary="Delivery by11 Sep, Saturday|Free" /></div>

            </div>
        </div>
    )
}

export default Sofa
