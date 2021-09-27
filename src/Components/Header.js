import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link , useHistory} from 'react-router-dom'
import flip from '../images/flip.jpeg'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import OrderIcon from '@material-ui/icons/CallToActionRounded'
import PlusIcon from '@material-ui/icons/AddAlertRounded'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Close from '@material-ui/icons/Close'
import {auth} from '../firebase'

function Header() {



    let basket = useSelector(state => state.basket)
    console.log(basket)

    let [dropdown1, setDropdown1] = useState(false)

    let [login, setLogin] = useState(false)

    let [email, setEmail] = useState('')

    let [password, setPassword] = useState('')

    const history = useHistory();




    // let register = (event) => {

    //     event.preventDefault();

    //     // alert(email +" "+password);

    //     auth.createUserWithEmailAndPassword(email, password)

    //         .then((authResponce) => {

    //             if (authResponce) {

    //                 history.push('/');

    //             }

    //         })

    //         .catch((errorresponse) => {

    //             alert('Error');

    //             console.log(errorresponse);

    //         })

    // }

    return (

        <div className="header">

            <div className='header__main1'>
                <div className='header__logopart'>
                    <Link to='/'  >

                        <img className='header__logo' src={flip} />
                        {/* <small className='Explore'>Explore </small><small className='plus'>Plus</small> */}
                    </Link>

                    <div className='header__main2'>
                        <input className='header__search' type='text' placeholder="search for products,brands and more" />
                        <div className='icon1'>
                            <SearchIcon className='header__searchIcon' />
                        </div>


                        <div className='login1'>
                            <div class="dropdown">
                                {/* <button className='button'>Login</button> */}
                                <div className="sec3">
                                    <p className='header__option2 login' onMouseEnter={() => setDropdown1(true)} onMouseLeave={() => setDropdown1(false)} onClick={() => setLogin(true)}><b>Login</b> </p>

                                </div>


                                <div class="dropdown-content">
                                    <a href="#" className='icon'><AccountCircleIcon />  Profile</a>
                                    <a href="#"><PlusIcon /> Pluse Zone</a>
                                    <a href="#"><OrderIcon />  Orders</a>

                                    <a href="#"><CardGiftcardIcon />  Gift Card</a>
                                    <a href="http://localhost:3000/log"><LinkedInIcon />  Sign-Up</a>
                                </div>
                            </div>

                        </div>

                        <div className='more'>
                            <div class="dropdown">
                                <h4>More</h4>
                                <div class="dropdown-content">
                                    <a href="#">Notification preferences</a>
                                    <a href="#">Sell on flipcart</a>
                                    <a href="#">24 x 7 customer care</a>
                                    <a href="#">Advertise</a>
                                    <a href="#">Download App</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to='/cart'>
                                <div className='header__cart'>

                                    <ShoppingCartOutlinedIcon className='header__shoppingcarticon' />
                                    <span className='cart__1'>Cart</span>
                                    <span className='cart__count'><b>{basket.length}</b></span>

                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={login ? "login_form_on" : "login_form_off"}>
                    <div className="login_main">

                        <div className="login_home">
                            <Close className="login_close" onClick={() => setLogin(false)} />
                            <div className="login_part1">
                                <div className="login_part1_info">
                                    <p>Login</p>
                                    <span>Get Access to Your order, wishlist and recommendation</span>
                                </div>
                                <div className="login_part1_pic">
                                    <img src={"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"} />
                                </div>
                            </div>
                            <div className="login_part2">
                                <div className="login_credentials">
                                    <input type="email" placeholder="Enter Email" />
                                </div>
                                <div className="login_credentials">
                                    <input type="password" placeholder="Enter Password" />
                                    <span className="forgot">forgot?</span>
                                </div>
                                <p>By continuing, you agree to Flipkart <span className="color_blue">terms of use</span> and <span className="color_blue">privacy policy</span></p>
                                <button className="login_button"> Log in </button>
                                <div className="login_or">
                                    <span>or</span>
                                    <p className="color_blue">New to Flipkart? Create New Account</p>
                                </div>
                                <button className="createacc_button">Create New Account</button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>





        </div>
    )
}

export default Header
