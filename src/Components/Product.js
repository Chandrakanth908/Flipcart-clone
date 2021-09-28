import React from 'react'
import ff from '../images/ff.png'
// import StarIcon from '@material-ui/icons/Star';
// import StarHalfIcon from '@material-ui/icons/StarHalf';
import './Product.css'
import { useDispatch } from 'react-redux'

function Product({ id, img, Model, Price, delivary }) {
    let dispatch = useDispatch();
    return (
        <div className="pol-3">
            <div className="pol-1">
                <img className="prd__img" src={img} alt="img2" /><br></br>
            </div>
            <div className="pol-2">
                <span>{Model}</span><br></br>
                <img className='ff__1' src={ff} alt="img3"/><br></br>
                <b><span className="pri">Price:{Price}</span></b><br></br>
                <b><span>{delivary}</span></b>

            </div>
            {/* <div className='P__star'> 4.5
            <StarIcon/>
            </div> */}

            {/* <button className="but" >Add to Cart</button> */}
            <button className="but" onClick={() => dispatch({ type: 'ADD_TO_CART', item: { image: img, Model: Model, Price: Price, delivary: delivary } })}>Add to Cart</button>
        </div>
    )
}

export default Product

