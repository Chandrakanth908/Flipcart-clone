import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import ProductCategory from './ProductCategory'
import teddy from '../images/header__teddy.png'
import appliances from '../images/appliances.png'
import electronics from '../images/electronics.png'
import fashion from '../images/fashion.png'
import gift from '../images/gift.png'
import grocery from '../images/grocery.png'
import travell from '../images/travell.png'
import mobile from '../images/mobile.png'
import home from '../images/home.jpg'

import slider1 from '../images/slider1.jpg'
import slider2 from '../images/slider2.png'
import slider3 from '../images/slider3.jpg'
import slider4 from '../images/slider4.jpg'
import slider5 from '../images/slider5.jpg'

import d1 from '../images/d1.jpeg'
import d2 from '../images/d2.jpeg'
import d3 from '../images/d3.jpeg'

import d5 from '../images/d5.jpeg'
import d6 from '../images/d6.jpeg'
import d7 from '../images/d7.jpeg'
import d8 from '../images/d8.jpeg'
import clock from '../images/clock.jpeg'
import bedsheet from '../images/bedsheet.jpeg'
import mens from '../images/mens.jpeg'
import mugs from '../images/mugs.jpeg'
import saree from '../images/saree.jpeg'
import shoe from '../images/shoe.jpeg'
import watch from '../images/watch.jpeg'
import wallet from '../images/wallet.jpeg'
import z1 from '../images/z1.jpeg'
import z2 from '../images/z2.jpeg'
import z3 from '../images/z3.jpeg'
import z4 from '../images/z4.jpeg'
import z5 from '../images/z5.jpeg'
import z6 from '../images/z6.jpeg'
import z7 from '../images/z7.jpeg'
import z8 from '../images/z8.jpeg'



function Home() {
    return (
        <div className='home__main'>
            <div className="main">
                <div class="dropdown">
                    <img className="images" src={gift} alt="img6" />
                    <p>Top offers</p>
                </div>
                <div class="dropdown">
                    <img className="images" src={grocery} alt="img7" />
                    <p>Grocery</p>
                </div>
                <div class="dropdown">
                    <img className="images" src={mobile} alt="img8" />
                    <p>Mobiles</p>
                </div>

                <div class="dropdown">
                    <img className="images" src={appliances} alt="img9"/>
                    <p>Appliances</p>
                    {/* <div class="dropdown-content">
                        <a href="/Telivisions">Telivisions</a>
                        <a href="#">Washing Machine </a>
                        <a href="#">Air conditioners </a>
                        <a href="#">Refrigirators </a>
                        <a href="#">Kitchen Appliances </a>
                        <a href="#">Home Appliances </a>
                        <a href="#">Seasonal Appliances </a>
                        <a href="#">Premium Appliances </a>
                        <a href="#">Buying Appliances </a>
                        <a href="#">Flipcart Benefits </a>
                        

                    </div> */}
                </div>
                <div class="dropdown">
                    <img className="images" src={electronics} alt="img10" />
                    <p>Electronics</p>
                    {/* <div class="dropdown-content">
                        <a href="#">Audio</a>
                        <a href="#">Cameras&Accesories</a>
                        <a href="#">Gaming</a>
                        <a href="#">Health&Personal care</a>
                        <a href="#">Laptop Accesories</a>
                        <a href="#">Laptop and Desktop</a>
                        <a href="#">Mobile Accesiries</a>
                        <a href="#">Power Bank</a>
                        <a href="#">Smart Wearables</a>
                        <a href="#">Storage</a>
                        <a href="#">Tablets</a>

                    </div> */}
                </div>
                <div class="dropdown">
                    <img className="images" src={fashion}  alt="img11" />
                    <p>Fashion</p>
                    {/* <div class="dropdown-content">
                        <a href="#">Men's Topwear</a>
                        <a href="#">Mens's Bottom wear</a>
                        <a href="#">women ethinic</a>
                        <a href="#">Women westren</a>
                        <a href="#">Men footwear</a>
                        <a href="#">Women footwear</a>
                        <a href="#">Watches</a>
                        <a href="#">Bags,suitcases&luggages</a>
                        <a href="#">kids</a>
                        <a href="#">essentials</a>
                        <a href="#">winter</a>
                    </div> */}
                </div>


                <div class="dropdown">
                    <img className="images" src={travell}  alt="img12"/>
                    <p>Travel</p>
                 
                </div>

                <div class="dropdown">
                    <img className="images" src={home}  alt="img13"/>
                    <p>Home</p>
                   
                </div>
                <div class="dropdown">
                    <img className="images" src={teddy}  alt="img14"/>
                    <p>Beauty,Toys&More</p>
                    
                </div>
            </div>
            {/* corosel starts */}
            <div className="coures" >
                <div id="imageCarousel" class="carousel slide " data-interval="1500" data-ride='carousel'>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={slider1}  alt="img15" class="img-responsive" />
                        </div>
                        <div class="carousel-item">
                            <img src={slider2}  alt="img16"class="img-responsive" />
                        </div>
                        <div class="carousel-item">
                            <img src={slider3}  alt="img17" class="img-responsive" />
                        </div>
                        <div class="carousel-item">
                            <img src={slider4}  alt="img18" class="img-responsive" />
                        </div>
                        <div class="carousel-item">
                            <img src={slider5}  alt="img19" class="img-responsive" />
                        </div>

                    </div>

                </div>

            </div>
            {/* corosel ends */}

            
            <div className='today__deals'>
                    <Link to='/'><h4>Deals of the day</h4></Link>
                    <button>View All</button>
                </div>

            <div className="row__1">
                
                <div className="home__1"><Link to="dress"><ProductCategory title="Dresses" description="Upto 60%off" imgsrc={d1} /></Link></div>
                <div className="home__1"><Link to="blankets"><ProductCategory imgsrc={d2} title="Blankets" description="" /></Link></div>
                <div className="home__1"><Link to="tools"><ProductCategory title="Power tools" description="" imgsrc={d3} /></Link></div>
                <div className="home__1"><Link to="appliances"><ProductCategory title="Bean bags&more..." description="From ₹199" imgsrc={d6} /></Link></div>

                
                <div className="home__1"><Link to="mobiles"><ProductCategory title="Mobiles" description="10%cashback" imgsrc={mobile} /></Link></div>
                <div className="home__1"><Link to="raki"><ProductCategory imgsrc={d7} title="Raki's" description="from ₹50" /></Link></div>
                <div className="home__1"><Link to="temples"><ProductCategory title="Home Temples" description="upto 50%off" imgsrc={d8} /></Link></div>
                <div className="home__1"><Link to=""><ProductCategory title="" description="See More" imgsrc={d5} /></Link></div>

            </div>
            <div className='today__deals'>
                    <Link to='/'><h4>Trending Offers</h4></Link>
                    <button>View All</button>
                </div>

            <div className="row__1">
                
                <div className="home__1"><Link to="mugs"><ProductCategory title="Mugs" description="Upto 60%off" imgsrc={mugs} /></Link></div>
                <div className="home__1"><Link to="mens"><ProductCategory imgsrc={mens} title="Men's wear" description="" /></Link></div>
                <div className="home__1"><Link to="wallet"><ProductCategory title="Wallets" description="" imgsrc={wallet} /></Link></div>
                <div className="home__1"><Link to="watches"><ProductCategory title="Watches" description="Upto 55%off" imgsrc={watch} /></Link></div>
                <div className="home__1"><Link to="bedsheet"><ProductCategory title="Bedsheets" description="See More" imgsrc={bedsheet} /></Link></div>
                
                <div className="home__1"><Link to="ballons"><ProductCategory title="Ballons" description="See More" imgsrc={saree} /></Link></div>
                <div className="home__1"><Link to="clocks"><ProductCategory imgsrc={clock} title="Wall clocks" description="See More" /></Link></div>
                <div className="home__1"><Link to="shoes"><ProductCategory title="Shoes" description="See More" imgsrc={shoe} /></Link></div>
               

            </div>
            <div className='today__deals'>
                    <Link to='/'><h4>Furniture Bestsellers</h4></Link>
                    <button>View All</button>
                </div>

            <div className="row__1">
                
                <div className="home__1"><Link to="homeswing"><ProductCategory title="Hammock And swings" description="" imgsrc={z1} /></Link></div>
                <div className="home__1"><Link to="appliances"><ProductCategory title="Bean bag covers" description="" imgsrc={z2} /></Link></div>
                <div className="home__1"><Link to="fish"><ProductCategory title="Aquarium" description="" imgsrc={z3} /></Link></div>
                <div className="home__1"><Link to="chairs"><ProductCategory title="Office&Study stairs" description="" imgsrc={z4} /></Link></div>
                <div className="home__1"><Link to="beds"><ProductCategory title="Beds" description="" imgsrc={z5} /></Link></div>
                <div className="home__1"><Link to="tv"><ProductCategory title="TV units" description="" imgsrc={z6} /></Link></div>
                <div className="home__1"><Link to="sofa"><ProductCategory title="Top20 inflatable sofa" description="" imgsrc={z7} /></Link></div>
                <div className="home__1"><Link to=""><ProductCategory title="Cabinett and drawers" description="" imgsrc={z8} /></Link></div>
              
               

            </div>

        </div>
    )
}

export default Home;