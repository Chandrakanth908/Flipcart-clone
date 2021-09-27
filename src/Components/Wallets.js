import React from 'react'
import Product from './Product'
import l1 from '../images/l1.jpeg'
import l2 from '../images/l2.jpeg'
import l3 from '../images/l3.jpeg'
import l4 from '../images/l4.jpeg'
import l5 from '../images/l5.jpeg'
import l6 from '../images/l6.jpeg'
import l7 from '../images/l7.jpeg'
import l8 from '../images/l8.jpeg'
function Wallets() {
    return (
        <div>
            <div className="home-1">
                <div className="hom-1"><Product img={l1} Model="LOOPA Wallet & Belt Combo Combo  (Tan)" Price="₹299" delivary="" /></div>
                <div className="hom-1"><Product img={l2} Model="Men Casual Beige Artificial Leather Wallet  (8 Card Slots)" Price="₹179" delivary="" /></div>
                <div className="hom-1"><Product img={l3} Model="Men Black Genuine Leather RFID Wallet  (9 Card Slots)" Price="₹549" delivary="" /></div>
                <div className="hom-1"><Product img={l4} Model="Men Black Genuine Leather Wallet  (4 Card Slots)" Price="₹424" delivary="Special priceends in less than01h:03m:07s" /></div>

            </div>
            <div className="home-1">
                <div className="hom-1"><Product img={l5} Model="Men Tan Genuine Leather Wallet  (8 Card Slots)" Price="₹694" delivary="Hurry, Only a few left!" /></div>
                <div className="hom-1"><Product img={l6} Model="Men Formal Black Genuine Leather Wallet  (7 Card Slots)" Price="₹540" delivary="" /></div>
                <div className="hom-1"><Product img={l7} Model="Men Black Genuine Leather Wallet  (8 Card Slots)" Price="₹694" delivary="" /></div>
                <div className="hom-1"><Product img={l8} Model="Women Casual Blue Canvas Wallet  (4 Card Slots)" Price="₹365" delivary="" /></div>6
            </div>
        </div>
    )
}

export default Wallets
