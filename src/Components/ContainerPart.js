import './components-styles/ContainerPart.css'
import React from 'react'

export default function ContainerPart(props){
    const { children } = props;

    return (
        <div className='ContainerPart'>
            { children }
        </div>
    )
}