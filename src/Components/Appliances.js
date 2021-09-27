import React from 'react'
import Product from './Product'
import a1 from '../images/a1.jpeg'
import a2 from '../images/a2.jpeg'
import a3 from '../images/a3.jpeg'
import a4 from '../images/a4.jpeg'
import a5 from '../images/a5.jpeg'
import a6 from '../images/a6.jpeg'
import a7 from '../images/a7.jpeg'
import a8 from '../images/a8.jpeg'


function Appliances() {
    return (
        <div>
            <div className="home-1">
                <div className="hom-1"><Product img={a1} Model=" " Price="" delivary="" /></div>
                <div className="hom-1"><Product img={a2} Model=" Dogerman Reversible Dual Colour Soft Foam Velvet Round Cat Dog Pet Bed S Pet Bed  (Grey, Black)" Price="₹359" delivary="" /></div>
                <div className="hom-1"><Product img={a3} Model="Hiputee Premium Waterproof Reversible Washable Dog Cat Pet Bed S Pet Bed  (Orange, Black) " Price="₹584" delivary="" /></div>
                <div className="hom-1"><Product img={a4} Model=" Madhavkunj Enterprise Cotton Small Swing  (Multicolor, Knock Down)" Price="₹424" delivary="" /></div>
            </div>
            <div className="home-1">
                <div className="hom-1"><Product img={a5} Model="Dogerman Velvet Foam Cushion Pet Cat Dog Bed with Washable & Removable Cover L Pet Bed  (Grey) " Price="₹1,799" delivary="" /></div>
                <div className="hom-1"><Product img={a6} Model=" Beanskart XXXL Tear Drop Bean Bag Cover (Without Beans)  (Multicolor)" Price="₹799" delivary="" /></div>
                <div className="hom-1"><Product img={a7} Model="Dogerman Reversible Super Soft Velvet Foam Rectangular Cat Dog Pet Bed S Pet Bed  (Blue, Black) " Price="₹449" delivary="" /></div>
                <div className="hom-1"><Product img={a8} Model="HighLyfe XXL Tear Drop Bean Bag Cover (Without Beans)  (Tan, Brown) " Price="₹629" delivary="" /></div>
            </div>

        </div>
    )
}

export default Appliances
