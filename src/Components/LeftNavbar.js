import './components-styles/LeftNavbar.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function LeftNavbar(props) {
    const { title, setCallHelp } = props;

    const shortURL = 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/';

    const home_icon = shortURL + 'home-icon.png?alt=media&token=67bbf3b8-73b0-4647-b682-17b2d226069d';

    const emoticon_icon = shortURL + 'hart--2.png?alt=media&token=9c16d0b4-fbf1-4b00-8860-d7b8802e7998';

    const drink_icon = shortURL + 'drink-icon-2.png?alt=media&token=3ac46963-131a-421b-9a73-8aafc2209a3b';

    const food_icon = shortURL + 'hamburguer-icon.png?alt=media&token=ca64c5ee-0c51-42f1-9212-c56c6a729bc0';

    const cart_icon = shortURL + 'shopping_cart_PNG38.png?alt=media&token=8c84a3ba-4fc6-4a60-b9b5-25d79557bbd0'

    const sino_icon = shortURL + 'sino.png?alt=media&token=4661e25d-9110-4b75-8126-66c20ebdfbbf';

    const [active, setActive] = useState('home');

    const handleNavLinkClick = (link) => {
        setActive(link);
    };

    const handleHalpClick = () => {

        setCallHelp(true)

        setTimeout( () => {
            setCallHelp(false)
        }, 2000)
    }

    return (
        <div className='LeftNavbar'>
            <div className='navbar'>
                <div className='navBrand'>
                    <h1>Mesa 01</h1>
                </div>

                <div className='nav-items'>
                    <Link to="/" className={active === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => handleNavLinkClick('home')}>
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
                <div onClick={handleHalpClick} className='come-here'>
                    <img src={sino_icon}></img>
                </div>
                <div className='meus-pedidos'>
                    <Link to="/pedidos">
                        <p>Pedidos</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
