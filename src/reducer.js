export const initialState={
    basket: [],
    user: null,
    product: [],
}
// privce assesment {it will be set into value={getBasketTotal(basket)}}
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount  , 0)



const reducer = (state, action)=>{
    switch(action.type){
        // add to basket
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket , action.item],
            };
            // remove from basket
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem)=> basketItem.id === action.id
            )
            let newBasket = [...state.basket]
            if(index >=0){
                newBasket.splice(index, 1)

            }else{
                console.warn(`can't remove product(id: ${action.id}) as it's not in the basket`)
            }
            return {
                ...state ,
                basket : newBasket
            }
            // user authorization
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket : []
            }
        case 'PRODUCT_DETAIL':
                return {
                ...state,
                product : action.item,
            }
        default: 
            return state;
    }
}

export default reducer;