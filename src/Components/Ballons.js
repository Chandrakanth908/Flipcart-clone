import React from 'react'
import Product from './Product'
import o1 from '../images/o1.jpeg'
import o2 from '../images/o2.jpeg'
import o3 from '../images/o3.jpeg'
import o4 from '../images/o4.jpeg'
import o5 from '../images/o5.jpeg'
import o6 from '../images/o6.jpeg'
import o7 from '../images/o7.jpeg'
import o8 from '../images/o8.jpeg'
function Ballons() {
    return (
        <div>
            <div className="home-1">
                <div className="hom-1"><Product img={o1} Model="a-one suppliers Solid Happy Birthday Foil Balloon Silver Metallic Balloons Blue, Black and Silver Balloon" Price="₹179" delivary="" /></div>
                <div className="hom-1"><Product img={o2} Model="Devansh enterprises Solid Happy Birthday Golden Foil Letter Balloons Balloon " Price="₹189" delivary="" /></div>
                <div className="hom-1"><Product img={o3} Model="Miss & Chief Printed Boss Baby Birthday Decoration Combo Set " Price="₹426" delivary="Special priceends in less than00h:31m:57s" /></div>
                <div className="hom-1"><Product img={o4} Model="Devansh enterprises Solid Golden Happy Birthday Foil Letter Balloons With 30 Red & White " Price="₹193" delivary="Special price" /></div>

            </div>
            <div className="home-1">
                <div className="hom-1"><Product img={o5} Model="HERDEM Printed HAPPY BIRTHDAY GOLDEN LETTER 13 PIECE.50 BLACK AND GOLDEN BALLOONS " Price="₹189" delivary="Special price" /></div>
                <div className="hom-1"><Product img={o6} Model="Smartcraft Printed Emoji Latex Smiley Balloon  (Yellow, Pack of 25)" Price="₹141" delivary="Special price" /></div>
                <div className="hom-1"><Product img={o7} Model="Devnidhi agri products Solid Happy Anniversary combo 83 piece set " Price="₹304" delivary="Special price" /></div>
                <div className="hom-1"><Product img={o8} Model="Anayatech Solid Happy Birthday Balloons for Decoration kit with 12pc Heart Shape" Price="₹335" delivary="Special price" /></div>

            </div>
        </div>
    )
}

export default Ballons
