import React, { useRef, useState } from "react";
import './components-styles/Cards.css';
import Card from "./Card";

export default function Cards({setCartItems, cardapio}) {

    const carouselRef = useRef(null);
    const leftImage = 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/leftArrow-removebg-preview.png?alt=media&token=3f258d15-4184-424c-b864-068ad798e01a';
    const rightImage = 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/rightArrow-removebg-preview.png?alt=media&token=1f51ceab-86a2-4c5e-b2a0-6aed74ae8e91';




    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }

    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };




    return (
        <div className="carousel-container">
            <button className="left-arrow arrow" onClick={scrollLeft}>{"<"}</button>
            <div className='carousel' ref={carouselRef}>
                <div className='Cards'>
                    {cardapio.map((item, index) => (

                        <Card valor={item.valor} setCartItems={setCartItems} title={item.nome} src={item.src} description={item.desc}/>

                    ))}

                </div>
            </div>
            <button className="right-arrow arrow" onClick={scrollRight}>{">"}</button>
        </div>
    );
}
