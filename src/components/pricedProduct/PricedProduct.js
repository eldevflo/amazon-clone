import React, { useState } from 'react'
import './PricedProduct.css'
import { useStateValue } from '../../StateProvider'
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

function PricedProduct({id,title , price , image , rating , description }) {
    const [state, dispatch]= useStateValue();
    const history= useHistory()
    // rating
     const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);
    const addToBasket=()=>{
        // dispatch the item into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        }
        )

    }
    const productdetail=(e)=>{
         dispatch({
            type: 'PRODUCT_DETAIL',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                description: description,
            }
        }
        )
        history.push('/productdetail')

    }
    
    return (
        <div className="PricedProduct">
            <div className="product-info">
                <p onClick={productdetail}>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                <Rating
                    value={rating}
                />
              
                </div>
                 
                <img src={image} alt="" onClick={productdetail}/>
                <div className="addtocard">
                <button onClick={addToBasket}>
                    Add to basket
                </button>
                </div>
            </div>
        
            
        </div>
    )
}

export default PricedProduct
