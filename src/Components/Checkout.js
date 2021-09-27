import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import './Product.css'
import './Checkout.css'
import {useDispatch} from 'react-redux'
function Product({id , img , Model , Price , delivary}) {
    let dispatch = useDispatch();
    return (
        <div className="pol-3">
            <div className="pol-1">
            <img className="prd__img" src={img}/><br></br>
            </div>
            <div className="pol-2">
            <span>{Model}</span><br></br>
            <b><span className="pri">Price:{Price}</span></b><br></br>
            <b><span>{delivary}</span></b><br></br>
            
            </div>
            {/* <div className='P__star'> 4.5
            <StarIcon/>
            </div> */}
          
          {/* <button className="but" >Add to Cart</button> */}
          <button className="but1" onClick= {()=> dispatch({type : 'REMOVE_PRODUCT', })}>Remove Item</button>
      </div>
    )
}

export default Product

