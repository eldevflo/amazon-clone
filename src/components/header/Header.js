import React from 'react'
import './Header.css'
import SearchIcon  from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';
function Header() {
        const [{basket , user}, dispatch]= useStateValue();

    const handleAuthentication=()=>{
        if (user){
            auth.signOut()
        }
    }
    

    return (
        
        <div className="Header container-fluid" >
            <Link to="/">
                <img className="header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />

            </Link>
            <div className="header-search">
                <input type="text" className="header-search-input"
                />
                <SearchIcon className="header-searchIcon "/>
            </div>           
            <div className="header-nav"></div>
            <Link to={!user && '/login' } >
                <div  onClick={handleAuthentication}
                 className="header-option">
                    <span className="header-optionLineOne">Hello {user? user.email: ''}</span>
                    <span  className="header-optionLineTwo ">{user ? 'SIGN OUT' : 'SIGN IN'}</span>
                </div>
            </Link>
            <Link to="/orders">
                <div className="header-option">
                    <span className="header-optionLineOne ">Returns</span>
                    <span className="header-optionLineTwo">& Orders</span>
                </div>
            </Link>
         
                <Link to="/checkout">
                    <div className="header-optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header-optionLineTwo header-bascketCount">{basket?.length}</span>
                    </div>
                </Link>
        </div>
  

    )
}

export default Header
