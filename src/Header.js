import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search' 
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

function Header() {
    return (
        <nav className="header">
            
            {/* logo  */}
            <Link  to="/login" >
            <img className="header_logo" src="http://www.userlogos.org/files/logos/ArkAngel06/Amazon.png" /> 
            </Link>
            

            {/* search box */}
            <div className="header_search">
                <input type="text" className="header_searchInput"/>
                <SearchIcon  className="header_searchIcon" />


            </div>

            {/* 3 links */}

            <div className="header_nav">
               
                <Link className="header_link" to="/login">
                <div className="header_option">
                <span className="header_optionLine1">hello</span>
                <span className="header_optionLine2">sign in</span>
                </div>
                </Link>

                <Link className="header_link" to="/login">
                <div className="header_option">
                <span className="header_optionLine1">returns</span>
                <span className="header_optionLine2">& orders</span>
                </div>
                </Link>
                

                <Link className="header_link" to="/login">
                <div className="header_option">
                <span className="header_optionLine1">your</span>
                <span className="header_optionLine2">prime</span>
                </div>
                </Link>
                
                
                



            </div>

            <Link to="/checkout" className="header_link">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header_optionLine2 header_optionCount">0</span>

                </div>
            
            </Link>
            {/* basket  */}
        </nav>
    );
}

export default Header
