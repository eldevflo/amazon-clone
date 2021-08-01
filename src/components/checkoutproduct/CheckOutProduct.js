import React from 'react'
import './CheckOutProduct.css'
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { useStateValue } from '../../StateProvider';
import Rating from '@material-ui/lab/Rating';

function CheckOutProduct({id, image,price,rating,title , hideButton}) {
            const [{basket}, dispatch]= useStateValue();

            const RemoveFromBasket =()=>{
                dispatch({
                    type: 'REMOVE_FROM_BASKET',
                    id: id
                })
            }


    return (
        <div className=" checkoutproduct">
            <img className="checkoutp-img" src={image}/>
            <div className="checkoutp-info">
                <p className="checkoutp-title">{title}</p>
                <p className="checkoutp-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutp-rating">
                    <Rating
                    value={rating}
                />
             
                </div>
                {!hideButton &&
                <RemoveShoppingCartIcon className="delete-btn" onClick={RemoveFromBasket} />
                }
            </div>
        </div>

    )
}

export default CheckOutProduct
