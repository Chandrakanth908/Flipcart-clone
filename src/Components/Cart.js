import React from 'react'
import './Cart.css'
// import cart from '../images/cart.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Checkout from '../Components/Checkout'
function Cart() {
    let basket = useSelector(state => state.basket);
    console.log(basket);

    let CheckoutDetails = basket.map(item => <Checkout img={item.image} Model={item.Model} Price={item.Price} delivary={item.delivary} />)


    return (
        <div className='main__akhil1'>
            <div className='main__akhil'>
                <div   >
                    <div className='cart__home' >
                        <h2>My Cart</h2>
                        {/* <div className='cart__image'  >
                        <img src={cart} />
                    </div> */}

                    </div>
                    <div className='cart__deliver'>
                        <h6>Deliver to
                            <select>
                                <option>Mahabubnagar-509001</option>
                                <option>Nagarkurnool-509001</option>
                            </select>
                        </h6>

                    </div>
                    <hr></hr>


                </div>
                <div className='cart__order'>

                    <Link to='/payment'>
                        <button className='cartorder__1' ><b>Place Order</b></button>
                    </Link>

                </div>
                <div>{CheckoutDetails}</div>
            </div>
        </div>
    )
}

export default Cart
