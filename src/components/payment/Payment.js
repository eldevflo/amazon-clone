import { useElements, useStripe , CardElement} from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import { Link , useHistory } from 'react-router-dom';
import CheckOutProduct from '../../components/checkoutproduct/CheckOutProduct';
import './Payment.css'
import { useStateValue } from '../../StateProvider';
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../../reducer';
import axios from '../../axios';
import { db } from "../../firebase";

function Payment() {

        const [{basket , user}, dispatch]= useStateValue();

        const history= useHistory()
        const stripe=useStripe()
        const elements = useElements()

        const [succeeded , setSucceeded]=useState(false);
        const [processing , setProcessing]=useState("")
        // disable the card
        const [disabled , setDisabled]=useState(true);
        // for error in the card payment
        const [error , setError]=useState(null);
        // for client secret 
        const [clientSecret, setClientSecret] = useState(true)
        
        // very important:
        useEffect(() => {
            // generate stripe secret for client
            const getClientSecret=async()=>{
                const response = await axios ({
                method: 'POST',
                // stripe expects the total in currencies subunits(for $ it i s cent so *100)
                url: `payments/create?total=${getBasketTotal(basket)*100}`
                });
                setClientSecret(response.data.clientSecret)
            }

            getClientSecret()
        }, [basket])

        console.log('secret is ' , clientSecret)
// payment method form handle submit:
        const handleSubmit= async(event) =>{
            event.preventDefault();
            setProcessing(true);
            // client security
            const payload = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            }).then(({paymentIntent})=>{
                // sql db for handling orders
                // users collection from database(firebase/firestore cloud)
                db//db from firebase
                    .collection('users')
                    .doc(user?.uid)
                    .collection('orders')
                    .doc(paymentIntent.id)
                    .set({
                        basket: basket,
                        amount: paymentIntent.amount,
                        created: paymentIntent.created
                    })
                // paymentIntent = payment confirmation
                setSucceeded(true);
                setError(null);
                setProcessing(false);

                dispatch({
                    type: 'EMPTY_BASKET'
                })

                history.replace('/orders')

            })


        }
        // cardelement handleChange:
        const handleChange=(event)=>{
            // if th event is empty go ahead and disable the button
            setDisabled(event.empty);
            // if there is an error show the error message otherwise nothing
            setError(event.error ? event.error.message : '');

        }
    return (
        <div className="payment">
        <div className="payment-container">
        <h1>checkout
        <Link to='/checkout'>
         ({basket?.length} items)
        </Link></h1>
        {/* delivery address: */}
            <div className="payment-section">
                <div className="payment-title">
                    <h4>Delivery Address</h4>
                </div>
                    <div className="payment-address">
                        <p>{user?.email}</p>
                        <p>Los Angeles,CK</p>
                        <p>123 react lane</p>
                    </div>
                

            </div>
            {/* reviw items */}
            <div className="payment-section">
              <div className="payment-title">
                  <h4>Review Items and Delivery</h4>
              </div>
                
                <div className="payment-items">
                    {basket.map(item =>(
                        <CheckOutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />

                    ))}
                </div>
            </div>
            {/* payment method */}
            <div className="payment-section">
             <div className="payment-title">
                    <h4>Payment Method</h4>
             </div>

             <div className="payment-detail">
                 {/* using stripe */}
                 <form
                //  connect the form:
                 onSubmit={handleSubmit}>
         {/* listen for changes inside the card element and display any error as the customer types their card details */}

                 <CardElement onChange={handleChange}/>
                 <div className="payment-price-container">
                     <CurrencyFormat
                     renderText={(value) =>
                     <>
                     <h3>Ordet Total: {value}</h3>
                     </>
                     }
                     decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                     />
                     <button disabled={processing|| succeeded||disabled}>
                         <span>{processing? <p>processing</p>: "buy now"}</span>
                     </button>
                 </div>
                 {/* error */}
                 {error && <div>{error}</div>}
                 </form>
             </div>
            </div>
        </div>
            
        </div>
    )
}

export default Payment
