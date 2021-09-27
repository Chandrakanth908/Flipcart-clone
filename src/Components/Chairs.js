import React from 'react'
import Product from './Product'
import u1 from '../images/u1.jpeg'
import u2 from '../images/u2.jpeg'
import u3 from '../images/u3.jpeg'
import u4 from '../images/u4.jpeg'
import u5 from '../images/u5.jpeg'
import u6 from '../images/u6.jpeg'
import u7 from '../images/u7.jpeg'
import u8 from '../images/u8.jpeg'
function Chairs() {
    return (
        <div>
            <div className="home-1">
                <div className="hom-1"><Product img={u1} Model="CELLBELL C104 Comfortable Fabric Office Executive Chair  (Brown, DIY(Do-It-Yourself))" Price="₹3,699" delivary="" /></div>
                <div className="hom-1"><Product img={u2} Model="GREEN SOUL New York High Back Office Chair Nylon Office Executive Chair  (Black, DIY(Do-It-Yourself))" Price="₹8,490" delivary="Extra ₹500 off" /></div>
                <div className="hom-1"><Product img={u3} Model="Oakcraft Leatherette Office Executive Chair  (Brown, DIY(Do-It-Yourself))" Price="₹5,799" delivary="Delivery by2 Sep, Thursday" /></div>
                <div className="hom-1"><Product img={u4} Model="Rose Designer Chairs Leatherette Office Executive Chair  (Brown, DIY(Do-It-Yourself))" Price="₹7,990" delivary="Extra ₹308 off" /></div>

            </div>
            <div className="home-1">
                <div className="hom-1"><Product img={u5} Model="Rose Designer Chairs Leatherette Office Executive Chair  (Multicolor, DIY(Do-It-Yourself))" Price="₹7,990" delivary="Extra ₹308 off" /></div>
                <div className="hom-1"><Product img={u6} Model="GREEN SOUL Vienna High Back Leatherette Office Executive Chair  (Black, DIY(Do-It-Yourself))" Price="₹7,990" delivary="Delivery in9-10 days" /></div>
                <div className="hom-1"><Product img={u7} Model="Rose Designer Chairs Leatherette Office Executive Chair  (Red, Black, DIY(Do-It-Yourself))Rose Designer Chairs Leatherette Office Executive Chair  (Red, Black, DIY(Do-It-Yourself))" Price="₹7,990" delivary="Hurry, Only a few left!" /></div>
                <div className="hom-1"><Product img={u8} Model="Rose Designer Chairs Leatherette Office Executive Chair  (Brown, DIY(Do-It-Yourself))" Price="₹8,199" delivary="Extra ₹300 off" /></div>

            </div>
        </div>
    )
}

export default Chairs
