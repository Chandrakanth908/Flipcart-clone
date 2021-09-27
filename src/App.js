import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Dress from './Components/Dress'
import Blankets from './Components/Blankets';
import Powertools from './Components/Powertools';
import Appliances from './Components/Appliances';
import Mobiles from './Components/Mobiles';
import Cart from './Components/Cart';
import Raki from './Components/Raki';
import Temples from './Components/Temples';
import Mugs from './Components/Mugs';
import Mens from './Components/Mens';
import Wallets from './Components/Wallets';
import Watches from './Components/Watches';
import Ballons from './Components/Ballons';
import Clocks from './Components/Clocks';
import Bedsheets from './Components/Bedsheets';
import Homeswings from './Components/Homeswings';
import Fish from './Components/Fish';
import Chairs from './Components/Chairs';
import Beds from './Components/Beds';
import Tv from './Components/Tv';
import Sofa from './Components/Sofa';
import Login from './Components/Login';
import Payment from './Components/Payment'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header/>
            <Home/>
            <Footer/>
          </Route>
          <Route path='/dress'>
            <Header/>
            <Dress/>
            <Footer/>
          </Route>
          {/* <Route path='/login'>
            <Header/>
            <Login/>
            
          </Route> */}
          <Route path='/blankets'>
            <Header/>
            <Blankets/>
            <Footer/>
          </Route>
          <Route path='/tools'>
            <Header/>
            <Powertools/>
            <Footer/>
          </Route>
          <Route path='/appliances'>
            <Header/>
            <Appliances/>
            <Footer/>
          </Route>
          <Route path='/mobiles'>
            <Header/>
            <Mobiles/>
            <Footer/>
          </Route>
          <Route path='/cart'>
            <Header/>
            <Cart/>
            
          </Route>
          <Route path='/raki'>
            <Header/>
            <Raki/>
            <Footer/>
          </Route>
          <Route path='/temples'>
            <Header/>
            <Temples/>
            <Footer/>
          </Route>
          <Route path='/mugs'>
            <Header/>
            <Mugs/>
            <Footer/>
          </Route>
          <Route path='/mens'>
            <Header/>
            <Mens/>
            <Footer/>
          </Route>
          <Route path='/wallet'>
            <Header/>
            <Wallets/>
            <Footer/>
          </Route>
          <Route path='/watches'>
            <Header/>
            <Watches/>
            <Footer/>
          </Route>
          <Route path='/ballons'>
            <Header/>
            <Ballons/>
            <Footer/>
          </Route>
          <Route path='/clocks'>
            <Header/>
            <Clocks/>
            <Footer/>
          </Route>
          <Route path='/bedsheet'>
            <Header/>
            <Bedsheets/>
            <Footer/>
          </Route>
          <Route path='/homeswing'>
            <Header/>
            <Homeswings/>
            <Footer/>
          </Route>
          <Route path='/fish'>
            <Header/>
            <Fish/>
            <Footer/>
          </Route>
          <Route path='/chairs'>
            <Header/>
            <Chairs/>
            <Footer/>
          </Route>
          <Route path='/beds'>
            <Header/>
            <Beds/>
            <Footer/>
          </Route>
          <Route path='/tv'>
            <Header/>
            <Tv/>
            <Footer/>
          </Route>
          <Route path='/sofa'>
            <Header/>
            <Sofa/>
            <Footer/>
          </Route>
          <Route path='/payment'>
            <Header/>
            <Payment/>
            <Footer/>
          </Route>

        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
