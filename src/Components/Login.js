import React from 'react'
import './Login.css';

import login from '../images/login.png'
export default function Login() {
    return (
        <div className='login__main1'>
            <div className='login__main'>
                <div className='log1'>
                    <h1>Login</h1>
                    <h7>
                        Get access to your Orders,<br></br>
                        Wishlist and Recommendations
                    </h7>
                    <div className='log3' >
                        <img src={login} />
                    </div>
                </div>


                <div className='log2'>


                    <div class="a1">
                        <div class="card__body">
                            <div>
                                {/* <p class="card-text">Enter email or mobile number</p> */}

                                <input type='text' className='a2' placeholder='Enter email or mobile number' /><br></br>
                            </div>

                            <div>
                                <p class="card-text">          </p>

                                <input type='password' className='a2' placeholder='password' />

                            </div>
                            <small className='account__text'>By continuing, you agree to  <a href='#'>Term's of Use</a> and <a href='#'>Privacy Notice</a></small>
                            {/* <summary className='account__text1'><a href="#">Need help?</a></summary> */}
                            <div >

                                <button className="a5">Login</button>
                            </div>
                            <span>OR</span>
                            <div >

                                <button className="a6"><b>Request OTP</b></button>
                            </div>
                            <div className="a7">
                                <button>New to flipcart?create an account</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}