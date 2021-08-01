import Rating from '@material-ui/lab/Rating';
import { useStateValue } from '../../StateProvider';
import './ProductDetail.css'
import { Image } from 'react-bootstrap';
import { AddShoppingCart } from '@material-ui/icons';

function ProductDetail({id,title , price , image , rating , description}) {


    const [{basket , user , product}, dispatch]= useStateValue();

    const addToBasket=()=>{
        // dispatch the item into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: product.id,
                title: product.title,
                image: product.image,
                price: product.price,
                rating: product.rating
            }
        }
        )

    }

 

    
    return (
        
        <div className="product-detail" key={product.id} >   
                <Image src={product?.image} alt="" />
                <h3>{product?.title}</h3>

                <p className="productd-price">
                    <small>$</small> 
                    <strong>{product?.price}</strong>
                </p>
                <div className="productd-rating">
                <Rating
                    value={product?.rating}
                />
              
                </div>
          
                 <div>
                     <p className="product-desc">
                         {product?.description}
                     </p>
                 </div>
                <div className="addtocard" >
                <button onClick={addToBasket} > {/*style={{background : theme.ui}}  */}
                 
                <AddShoppingCart  />
                buy
                </button>
                </div>
                
            </div>
             
        
         

    )
}

export default ProductDetail
