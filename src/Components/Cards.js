import React, { useRef, useState } from "react";
import './components-styles/Cards.css';
import Card from "./Card";

export default function Cards({setCartItems}) {

    const carouselRef = useRef(null);
    const [leftImage, setLeftImage] = useState('https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/left-hand.png?alt=media&token=242755dc-1e65-4280-8dac-8713198b8905');
    const [rightImage, setRightImage] = useState('https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/right-hand.png?alt=media&token=f6664f92-b9a8-4261-be76-0ccfff66be70');

    const leftHandCut = 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/hand-cut-left.png?alt=media&token=051e4868-1ee1-4504-97d9-f2897da41252';
    const rightHandCut = 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/hand-cut-right.png?alt=media&token=c3ea1c7a-308d-4a42-98f9-630a2db9a651';




    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
        setLeftImage(leftHandCut);
        setTimeout(() => setLeftImage('https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/left-hand.png?alt=media&token=242755dc-1e65-4280-8dac-8713198b8905'), 1000);
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
        setRightImage(rightHandCut);
        setTimeout(() => setRightImage('https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/right-hand.png?alt=media&token=f6664f92-b9a8-4261-be76-0ccfff66be70'), 1000);
    };




    return (
        <div className="carousel-container">
            <button className="left-arrow arrow" onClick={scrollLeft}><img src={leftImage} alt="left" /></button>
            <div className='carousel' ref={carouselRef}>
                <div className='Cards'>
                    <Card valor="10,00" setCartItems={setCartItems} title="DRINK" src="src" description="Feito de ..." />
                </div>
            </div>
            <button className="right-arrow arrow" onClick={scrollRight}><img src={rightImage} alt="right" /></button>
        </div>
    );
}
