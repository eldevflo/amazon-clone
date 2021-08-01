import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckOutProduct from '../../components/checkoutproduct/CheckOutProduct'
import CurrencyFormat from 'react-currency-format'

function Order({order}) {
    return (
        <div className='order'>
            <h2>orders</h2>
            {/* dar in marhale moment ra install mikonim */}
            <p>{moment.unix(order.data.created).format("YY MMM DO , h:mma")}</p>
            <p className="order-id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item=>(
               <CheckOutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                        />
            ))}
            <CurrencyFormat 
                     renderText={(value) =>
                     <>
                     <h3 className="order-total">Order Total: {value}</h3>
                     </>
                     }
                     decimalScale={2}
                    value={order.data.amount /100}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                     />
        </div>
    )
}

export default Order
