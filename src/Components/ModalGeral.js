import './components-styles/ModalGeral.css'
import React from 'react'



export default function ModalGeral({text, addClass}){
     return (
        <div className={addClass}>
            <h4>{text}</h4>
        </div>
     )
}