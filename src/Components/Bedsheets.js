import React from 'react'
import Product from './Product'
import f1 from '../images/f1.jpeg'
import f2 from '../images/f2.jpeg'
import f3 from '../images/f3.jpeg'
import f4 from '../images/f4.jpeg'
import f5 from '../images/f5.jpeg'
import f6 from '../images/f6.jpeg'
import f7 from '../images/f7.jpeg'
import f8 from '../images/f8.jpeg'
function Bedsheets() {
    return (
        <div>
            <div className="home-1">
                <div className="hom-1"><Product img={f1} Model="CHHAVI INDIA 144 TC Microfiber Double 3D Printed Bedsheet  (Pack of 1, Multicolor 1)" Price="₹299" delivary="Delivery by15 sep, Tuesday" /></div>
                <div className="hom-1"><Product img={f2} Model="CHHAVI INDIA 120 TC Microfiber Double 3D Printed Bedsheet  (Pack of 1, Multicolor)" Price="₹279" delivary="Delivery by14 sep, Tuesday" /></div>
                <div className="hom-1"><Product img={f3} Model="Decorum 204 TC Microfiber Double King Floral Bedsheet  (Pack of 1, White)" Price="₹208" delivary="Delivery by11 sep, Tuesday" /></div>
                <div className="hom-1"><Product img={f4} Model="CHHAVI INDIA 120 TC Microfiber Double 3D Printed Bedsheet  (Pack of 1, Multicolor)" Price="₹269" delivary="Delivery by24 sep, Tuesday" /></div>
            </div>
            <div className="home-1">
                
                <div className="hom-1"><Product img={f5} Model="IWS 104 TC Cotton Double Printed Bedsheet  (Pack of 1, Multicolor)" Price="₹388" delivary="Delivery by21 sep, Tuesday" /></div>
                <div className="hom-1"><Product img={f6} Model="RisingStar 160 TC Cotton Double Printed Bedsheet  (Pack of 1, Blue)" Price="₹280" delivary="Delivery by15 sep, Tuesday" /></div>
                <div className="hom-1"><Product img={f7} Model="CHHAVI INDIA 120 TC Microfiber Double Floral Bedsheet  (Pack of 1, Purple)" Price="₹266" delivary="Delivery by9 sep, Tuesday" /></div>
                <div className="hom-1"><Product img={f8} Model="METRO LIVING 104 TC Cotton Double Printed Bedsheet  (Pack of 1, Blue)" Price="₹339" delivary="Delivery by20 sep, Tuesday" /></div>
            </div>
        </div>
    )
}

export default Bedsheets
