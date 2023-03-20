import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <img src="https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo.png" alt="" className='header__logo' />

            <div className="header__search">
                <input type="text" className='header__searchInput'/>
                {/* Logo */}
            </div>

            <div className='header__nav'>
                <div className='header__option'>
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineOne">Sign In</span>
                </div>

                <div className='header__option'>
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineOne">& Orders</span>
                </div>

                <div className='header__option'>
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineOne">Prime</span>
                </div>
            </div>
        </div>
    )
}

export default Header
