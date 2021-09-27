import React from 'react'
import Product from './Product'
import s1 from '../images/s1.jpeg'
import s2 from '../images/s2.jpeg'
import s3 from '../images/s3.jpeg'
import s4 from '../images/s4.jpeg'
import s5 from '../images/s5.jpeg'
import s6 from '../images/s6.jpeg'
import s7 from '../images/s7.jpeg'
import s8 from '../images/s8.jpeg'
function Watches() {
    return (
        <div>
            <div className="home-1">
                <div className="hom-1"><Product img={s1} Model="LCS-8188 BLUE DIAL AND SILVER STRAP DAY & DATE FUNCTIONING WATCH FOR BOYS Analog Watch - For Men" Price="₹314" delivary="Special priceends in less than00h:49m:09" /></div>
                <div className="hom-1"><Product img={s2} Model="Blue Heart Analog Watch For Women Watch And Bracelet Analog Watch - For Women" Price="₹346" delivary="" /></div>
                <div className="hom-1"><Product img={s3} Model="LIMESTONE LS2734 Wolf Gents Exclusive Mesh Strap Analog Analog Watch - For Men" Price="₹207" delivary="Special price" /></div>
                <div className="hom-1"><Product img={s4} Model="LED-SQ Digital Watch - For Boys & Girls" Price="₹159" delivary="Special price" /></div>
            </div>
            <div className="home-1">
                <div className="hom-1"><Product img={s5} Model="Pink diamond studded attractive butterfly stylish women Analog Watch - For Girls" Price="₹156" delivary="Special price" /></div>
                <div className="hom-1"><Product img={s6} Model="AKS Golden Diamond Women And Rosara Gold Silver Black Dial Men Couple Combo Watch For Couple Couple watches Analog Watch - For Couple" Price="₹342" delivary="Special priceends in less than00h:43m:49s" /></div>
                <div className="hom-1"><Product img={s7} Model="New Style Rose Gold And Copper Star Diamond Analog Wrist Watch - For Girls Analog Wrist Watch Analog Watch - For Girls" Price="₹329" delivary="" /></div>
                <div className="hom-1"><Product img={s8} Model="Gmarks - 1270 Blue Sports Skmei Analog-Digital Watch - For Men" Price="₹398" delivary="" /></div>

            </div>
        </div>
    )
}

export default Watches
