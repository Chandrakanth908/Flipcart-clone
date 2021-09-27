import React from 'react'
import Product from './Product'
import k1 from '../images/k1.jpeg'
import k2 from '../images/k2.jpeg'
import k3 from '../images/k3.jpeg'
import k4 from '../images/k4.jpeg'
import k5 from '../images/k5.jpeg'
import k6 from '../images/k6.jpeg'
import k7 from '../images/k7.jpeg'
import k8 from '../images/k8.jpeg'
function Clocks() {
    return (
        <div>
            <div className="home-1">
                <div className="hom-1"><Product img={k1} Model="R&P ENTERPRISE Analog 70 cm X 60 cm Wall Clock  (Black, Red, Without Glass)" Price="₹577" delivary="Hurry, Only 3 left!" /></div>
                <div className="hom-1"><Product img={k2} Model="AJANTA Analog 30 cm X 30 cm Wall Clock  (Red)" Price="₹429" delivary="Hurry, Only 1 left!" /></div>
                <div className="hom-1"><Product img={k3} Model="mishty Analog 28 cm X 28 cm Wall Clock  (Black, With Glass)" Price="₹399" delivary="Hurry, Only 2 left!" /></div>
                <div className="hom-1"><Product img={k4} Model="S&K TRADERS Analog 60 cm X 60 cm Wall Clock  (Black, Without Glass)" Price="₹998" delivary="Hurry, Only 5 left!" /></div>

            </div>
            <div className="home-1">
                <div className="hom-1"><Product img={k5} Model="Vastva Analog 30 cm X 30 cm Wall Clock  (Purple, Black)" Price="₹299" delivary="Hurry, Only 1 left!" /></div>
                <div className="hom-1"><Product img={k6} Model="AJANTA Analog 38 cm X 43 cm Wall Clock  (Multicolor)" Price="₹499" delivary="Hurry, Only 4 left!" /></div>
                <div className="hom-1"><Product img={k7} Model="shree kirshna collections Analog 31 cm X 31 cm Wall Clock  (Multicolor, With Glass)" Price="₹299" delivary="Hurry, Only 2 left!" /></div>
                <div className="hom-1"><Product img={k8} Model="Angel Shoppie Analog 30.48 cm X 30.48 cm Wall Clock  (Black, With Glass)" Price="₹309" delivary="Hurry, Only 4 left!" /></div>

            </div>
        </div>
    )
}

export default Clocks
