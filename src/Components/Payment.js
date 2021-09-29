import React from 'react'
import './Payment.css'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'

function Payment() {
    let history=useHistory()
    let dispatch=useDispatch()

    let buyProduct = ()=>{
        alert("Your payment is done")
        history.push("/")
        dispatch({type : "EMPTY_BASKET"})

    }

    return (
        <div className="carthead container">
            <div className="payment__info">

                <h3>Select a delivary address</h3>

                <div className='main__payment'>
                    <div className='main__payment1'>
                        <input type="radio" name="radio" />
                    </div>
                    <div>                      
                        <span><b>Chandrakanth Miryala</b></span><br />
                        <span>krishna nagar,</span><br />
                        <span>Bhageertha Colony,</span><br />
                        <span>Mahabubnagar-509001</span><br />
                    </div>
                </div>

                <div className='main__payment2'>
                    <div className='main__payment1'>
                        <input type="radio" name="radio" />
                    </div>
                    <div>                    
                        <span><b>Akhil kumar</b></span><br />
                        <span>Rajendra nagar,</span><br />
                        <span>Saddal gundu,</span><br />
                        <span>Mahabubnagar-509001</span><br />                       
                    </div>
                </div>
                
            </div>

            <div className="payment__info1">
                <h3>Choose your payment method</h3>

                <input type="radio" name="radio" />
                <b><label for="defaultRadio">UPI Payments</label></b><br></br>

                <input type="radio" name="radio" />
                <b><label for="defaultRadio">Net Banking</label></b><br></br>
                <input type="radio" name="radio" />
                <b><label for="defaultRadio">Credit/Debit cards</label></b><br></br>
                <input type="radio" name="radio" />
                <label for="defaultRadio"><b>Pay On Delivary</b><p>Pay digitally with SMS pay link|
                    <p>Cash may not be accepted in COVID restricted areas</p></p></label>



            </div>

            <button className='place' onClick={buyProduct} ><b>Place Order</b></button>
        </div>
    )
}
export default Payment;