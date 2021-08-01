import React, { useEffect, useState } from 'react'
import './Orders.css'
import { db } from "../../firebase";
import { useStateValue } from '../../StateProvider';
import Order from '../../containers/order/Order';

function Orders() {
    const [orders, setOrders] = useState([])
    const [{basket , user}, dispatch]= useStateValue();

 useEffect(() => {
      if(user){
        db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created' , 'desc')
        // constantly listen to a document(real time):
        .onSnapshot(snapshot=>(
            setOrders(snapshot.docs.map(doc =>({
                id: doc.id,
                data: doc.data()

            })))
        ))            
    }   else{
            setOrders([])
        }
 }, [user])


    return (
        <div className="orders">
            <h1>your orders</h1>
            <div className="orders-order">
                {orders?.map(
                    order =>(
                        <Order order={order}/>
                    )
                )}
            </div>

        </div>
    )
}

export default Orders
