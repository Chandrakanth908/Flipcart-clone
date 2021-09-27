
import './Payment.css'


// import {useSelector, useDispatch} from 'react-redux'
// import { Link  , useHistory } from 'react-router-dom'
// import {v4 as uuidv4} from 'uuid';
// import {db} from '../firebase'

// import Checkout from '../Components/Checkout'
function Payment() {

    // let basket = useSelector(state =>state.basket);
    // let user = useSelector(state=>state.user)
    // console.log(basket);
    // let history=useHistory();
    // let dispatch=useDispatch();

    // // let CheckoutDetails = basket.map(item=><Checkout  image={item.image} Model={item.Model} Price={item.Price} delivary={item.delivary}/>)
    // // console.log(CheckoutDetails)

    // const handleSubmit = async (event)=>{
    //     event.preventDefault();
    //     // console.log('*****************');
    //     // console.log(user.uid);
    //     console.log(db);
    //     const users= db.collection('users');
    //     console.log(users);

    //     let paymentId = uuidv4();
    //     console.log(paymentId)
    //     db.collection('users').doc(user?.uid).collection('orders').doc(paymentId).set({
    //         basket: basket,
    //         amout : 100 
    //     })
    //     console.log("after payment");
    //     alert('Payment is succesfull')

    //     dispatch({
    //         type : 'EMPTY_BASKET',
    //     })
    //     history.replace('/Myorders');
    // }

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

            <button className='place' ><b>Place Order</b></button>
        </div>
    )
}
export default Payment;