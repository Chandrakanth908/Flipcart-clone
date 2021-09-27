import React from 'react'
import Product from './Product'
import y1 from '../images/y1.jpeg'
import y2 from '../images/y2.jpeg'
import y3 from '../images/y3.jpeg'
import y4 from '../images/y4.jpeg'
import y5 from '../images/y5.jpeg'
import y6 from '../images/y6.jpeg'
import y7 from '../images/y7.jpeg'
import y8 from '../images/y8.jpeg'
function Beds() {
    return (
        <div>
            <div className="home-1">
                <div className="hom-1"><Product img={y1} Model="Hometown Bolton Hydraulic Engineered Wood King Hydraulic Bed  (Finish Color - Wenge, Delivery Condition - Knock Down)" Price="₹29,900" delivary="Installation & Demo Free" /></div>
                <div className="hom-1"><Product img={y2} Model="Flipkart Perfect Homes Opus Engineered Wood Queen Box Bed  (Finish Color - Espresso, Delivery Condition - Knock Down)" Price="₹12,990" delivary="Installation & Demo Free" /></div>
                <div className="hom-1"><Product img={y3} Model="FurnitureKraft Nancy Metal Queen Bed  (Finish Color - Dark Black, Delivery Condition - Knock Down)" Price="₹7,390" delivary="Installation & Demo Free" /></div>
                <div className="hom-1"><Product img={y4} Model="@Home by nilkamal Nemo Metal Bunk Bed  (Finish Color - NA, Knock Down)" Price="₹13,900" delivary="Installation & Demo Free" /></div>

            </div>
            <div className="home-1">
                <div className="hom-1"><Product img={y5} Model="Studio Kook Tribe Engineered Wood Single Drawer Bed  (Finish Color - Junglewood, Delivery Condition - Knock Down)" Price="₹14,150" delivary="Installation & Demo Free" /></div>
                <div className="hom-1"><Product img={y6} Model="TREVI Primus Bed With Storage Engineered Wood Single NA Bed  (Finish Color - Walnut, Delivery Condition - Knock Down)" Price="₹6,999" delivary="Installation & Demo Free" /></div>
                <div className="hom-1"><Product img={y7} Model="Flipkart Perfect Homes Rhapsody Engineered Wood Queen Box Bed  (Finish Color - Espresso, Delivery Condition - Knock Down)" Price="₹15,747" delivary="Installation & Demo Free" /></div>
                <div className="hom-1"><Product img={y8} Model="@Home by nilkamal Nimbo Metal King Bed  (Finish Color - Black, Delivery Condition - Knock Down)" Price="₹9,500" delivary="Installation & Demo Free" /></div>

            </div>
        </div>
    )
}

export default Beds

