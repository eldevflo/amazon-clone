import './App.css'
import {  Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './containers/home/Home';
import Checkout from './containers/checkout/Checkout';
import Login from "./components/login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/payment/Payment";
import Register from "./components/Register/Register";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/orders/Orders";
import ProductDetail from "./components/productDetail/ProductDetail";


// stripe key(public):
  const promise = loadStripe("pk_test_51IgQ1sDhmyrgepSH2MbiVFY8b3HdbMKmBSCEeig5OG2pTpd9UszOXJ4IP0jdzOfyf5Yb07QgtdgL0IKwhOdIwhgg00ciqDRgWk")

function App() {
  // keep tracking of signed in user:
    const [{}, dispatch]= useStateValue();

    
  useEffect(() => {
 
    // fires just when the app component loads
    auth.onAuthStateChanged(authUser=>{
      console.log('the user is>>>' , authUser);

      if (authUser){
        // if user is logged in or refreshed the page and was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }else{
        // if user is logged out 
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  
  return (
    <Router>
    <div className="App">

    <Switch>
        <Route path="/productdetail">
      <Header/>
      <ProductDetail/>
    </Route>
    <Route path="/orders">
      <Header/>
      <Orders/>
    </Route>
     <Route path="/login">
      <Login/>
    </Route>
     <Route path="/checkout">
      <Header/>
      <Checkout/>
    </Route>
    <Route path="/payment">
      <Header/>
      {/* stripe elements added as higher order component */}
      <Elements
      stripe={promise}>
        <Payment/>
      </Elements>
     
    </Route>
    <Route path="/register">
      <Register/>
    </Route>
    <Route path="/">
      <Header/>
      <Home/>
    </Route>

   
    </Switch>
    </div>
     </Router>
    
  );
}

export default App;
