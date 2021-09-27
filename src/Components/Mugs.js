import React from 'react'
import Product from './Product'
import c1 from '../images/c1.jpeg'
import c2 from '../images/c2.jpeg'
import c3 from '../images/c3.jpeg'
import c4 from '../images/c4.jpeg'
import c5 from '../images/c5.jpeg'
import c6 from '../images/c6.jpeg'
import c7 from '../images/c7.jpeg'
import c8 from '../images/c8.jpeg'
function Mugs() {
    return (
        <div>
            <div className="home-1">
                <div className="hom-1"><Product img={c1} Model="Adi Creations Best Sister ever Always Happy Designer Ceramic Coffee Mug  (350 ml)" Price="₹189" delivary="Hurry, Only 5 left!" /></div>
                <div className="hom-1"><Product img={c2} Model="purezento Success Cycle Ceramic Coffee Mug  (350 ml)" Price="₹195" delivary="" /></div>
                <div className="hom-1"><Product img={c3} Model="Phirki Studio Love You Bro Ceramic Coffee Mug  (325 ml)" Price="₹249" delivary="" /></div>
                <div className="hom-1"><Product img={c4} Model="Tuelip Be Happy Printed for tea & coffee Ceramic Coffee Mug  (350 ml)" Price="₹279" delivary="" /></div>

            </div>
            <div className="home-1">
                <div className="hom-1"><Product img={c5} Model="Murli Textiles MTM Happy Birthday Ceramic printed coffee mug(350ml) flower print Ceramic Coffee Mug  (350 ml)" Price="₹147" delivary="" /></div>
                <div className="hom-1"><Product img={c6} Model="Phirki Studio Brother Meaning Ceramic Coffee Mug  (325 ml)" Price="₹249" delivary="" /></div>
                <div className="hom-1"><Product img={c7} Model="Satyam Kraft Cute 3D Lazy Panda Printed Panda Ceramic Coffee Milk Tea Cup with Funny Lid " Price="₹449" delivary="" /></div>
                <div className="hom-1"><Product img={c8} Model="Printed Personalized Coffee/Cup with Own Photo, Quote, Text, Birthday Wishes for Gifting Purpose & Decoration Color " Price="₹299" delivary="" /></div>

            </div>
        </div>
    )
}

export default Mugs
