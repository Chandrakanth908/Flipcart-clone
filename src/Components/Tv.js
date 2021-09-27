import React from 'react'
import Product from './Product'
import v1 from '../images/v1.jpeg'
import v2 from '../images/v2.jpeg'
import v3 from '../images/v3.jpeg'
import v4 from '../images/v4.jpeg'
import v5 from '../images/v5.jpeg'
import v6 from '../images/v6.jpeg'
import v7 from '../images/v7.jpeg'
import v8 from '../images/v8.jpeg'
function Tv() {
    return (
        <div>
            <div className="home-1">
                <div className="hom-1"><Product img={v1} Model="BLUEWUD Primax Engineered Wood TV Entertainment Unit  (Finish Color - Wenge, DIY(Do-It-Yourself))" Price="₹2,999" delivary="Delivery by20 Sep, Monday|Free" /></div>
                <div className="hom-1"><Product img={v2} Model="Woodbuzz Engineered Wood TV Entertainment Unit  (Finish Color - Frosty White, Knock Down)" Price="₹12,980" delivary="Currently out of stock" /></div>
                <div className="hom-1"><Product img={v3} Model="Flipkart Perfect Homes Webster Engineered Wood TV Entertainment Unit  (Finish Color - Latin Walnut, Knock Down)" Price="₹15,826" delivary="Delivery by20 Sep, Monday|Free" /></div>
                <div className="hom-1"><Product img={v4} Model="Woodbuzz Engineered Wood TV Entertainment Unit  (Finish Color - Frosty White, Knock Down)" Price="₹12,800" delivary="Currently out of stock " /></div>
            </div>
            <div className="home-1">
                <div className="hom-1"><Product img={v5} Model="BLUEWUD Rowlet Engineered Wood TV Entertainment Unit  (Finish Color - Brown, DIY(Do-It-Yourself))" Price="₹12,499" delivary="Delivery by20 Sep, Monday|Free" /></div>
                <div className="hom-1"><Product img={v6} Model="WUDVILLE Wudville Engineered Wood TV Entertainment Unit  (Finish Color - Wenge, DIY(Do-It-Yourself))" Price="₹2,149" delivary="Delivery by20 Sep, Monday|Free" /></div>
                <div className="hom-1"><Product img={v7} Model="Furnifry Wooden TV Entertainment Unit with 2 Wall Shelf/Wall Set Top Box Shelf Stand/TV Cabinet for Wall/Set Top Box Holder for Home/Living Room" Price="₹1,899" delivary="Delivery by20 Sep, Monday|Free" /></div>
                <div className="hom-1"><Product img={v8} Model="BLUEWUD Oliver Engineered Wood TV Entertainment Unit  (Finish Color - Wenge, DIY(Do-It-Yourself))" Price="₹2,599" delivary="Delivery by20 Sep, Monday|Free" /></div>

            </div>
        </div>
    )
}

export default Tv
