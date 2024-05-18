import './components-styles/LeftNavbar.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function LeftNavbar(props) {
    const { title } = props;

    const shortURL = 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/';
    const home_icon = shortURL + 'home-icon.png?alt=media&token=67bbf3b8-73b0-4647-b682-17b2d226069d';
    const emoticon_icon = shortURL + 'hart-removebg-preview.png?alt=media&token=c31cb670-c2d1-45b1-a2e9-67990c8c3d1c';
    const drink_icon = shortURL + 'drink-icon-removebg-preview.png?alt=media&token=e243d508-805e-4f8e-b3e5-1e76b145d507';
    const food_icon = shortURL + 'hamburguer-icon-removebg-preview.png?alt=media&token=f3a24e6e-6b6f-4792-9acb-9759665eadb7';

    const cart_icon = shortURL + 'shopping_cart_PNG38.png?alt=media&token=8c84a3ba-4fc6-4a60-b9b5-25d79557bbd0'

    const sino_icon = shortURL + 'sino.png?alt=media&token=4661e25d-9110-4b75-8126-66c20ebdfbbf';

    const [active, setActive] = useState('home');

    const handleNavLinkClick = (link) => {
        setActive(link);
    };

    return (
        <div className='LeftNavbar'>
            <div className='navbar'>
                <div className='navBrand'>
                    <h1>{title}</h1>
                </div>

                <div className='nav-items'>
                    <Link to="/home" className={active === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => handleNavLinkClick('home')}>
                        <img className='menu-icon' alt='Home Icon' src={home_icon} />
                    </Link>
                    <Link to="/favorites" className={active === 'favorite' ? 'nav-link active' : 'nav-link'} onClick={() => handleNavLinkClick('favorite')}>
                        <img className='menu-icon' alt='Favorite Icon' src={emoticon_icon} />
                    </Link>
                    <Link to="/drink" className={active === 'drink' ? 'nav-link active' : 'nav-link'} onClick={() => handleNavLinkClick('drink')}>
                        <img className='menu-icon' alt="Drink Icon" src={drink_icon} />
                    </Link>
                    <Link to="/hamburgueres" className={active === 'food' ? 'nav-link active' : 'nav-link'} onClick={() => handleNavLinkClick('food')}>
                        <img className='menu-icon' alt="Food Icon" src={food_icon} />
                    </Link>
                </div>

                <div className='CART'>
                    <Link to="/cart" >
                        <img className='menu-icon cart-icon' src={cart_icon}></img>
                    </Link>
                </div>
                <div className='come-here'>
                    <img src={sino_icon}></img>
                </div>
            </div>
        </div>
    );
}
