import './components-styles/HomeSection.css';
import React from 'react';


export default function HomeSection(props){
    const { children } = props;

    return (
        <div className='HomeSection'>
            { children }
        </div>
    )
}