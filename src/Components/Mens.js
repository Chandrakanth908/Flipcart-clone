import React from 'react'
import Product from './Product'
import e1 from '../images/e1.jpeg'
import e2 from '../images/e2.jpeg'
import e3 from '../images/e3.jpeg'
import e4 from '../images/e4.jpeg'
import e5 from '../images/e5.jpeg'
import e6 from '../images/e6.jpeg'
import e7 from '../images/e7.jpeg'
import e8 from '../images/e8.jpeg'
function Mens() {
    return (
        <div>
            <div className="home-1">
                <div className="hom-1"><Product img={e1} Model="Printed Men Hooded Neck Black T-Shirt" Price="₹272" delivary="Special price" /></div>
                <div className="hom-1"><Product img={e2} Model="Solid Men Polo Neck White, Black T-Shirt" Price="₹350" delivary="Special price" /></div>
                <div className="hom-1"><Product img={e3} Model="Solid Men Henley Neck Dark Blue, Maroon T-Shirt" Price="₹242" delivary="Hurry, Only 1 left!" /></div>
                <div className="hom-1"><Product img={e4} Model="Solid Men Round Neck Yellow T-Shirt" Price="₹255" delivary="Hurry, Only a few left!" /></div>

            </div>
            <div className="home-1">
                <div className="hom-1"><Product img={e5} Model="Men Regular Fit Striped Spread Collar Casual Shirt" Price="₹589" delivary="" /></div>
                <div className="hom-1"><Product img={e6} Model="Men NA Fit Striped Casual Shirt" Price="₹599" delivary="Hurry, Only a few left!" /></div>
                <div className="hom-1"><Product img={e7} Model="Men Regular Fit Printed Spread Collar Casual Shirt" Price="₹1,164" delivary="Hurry, Only 2 left!" /></div>
                <div className="hom-1"><Product img={e8} Model="Men Regular Fit Printed Mandarin Collar Casual Shirt" Price="₹540" delivary="Special priceends in less than01h:15m:20s" /></div>

            </div>
        </div>
    )
}

export default Mens
