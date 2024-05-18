import './components-styles/CallHelpModal.css'
import React from 'react'

export default function CallHelpModal(props){

    const { callHelp } = props;

    return (
        <div className={`CallHelpModal ${callHelp ? '' : 'd-none'}`}>
            <div>
                <h1>O garçon logo virá a sua mesa</h1>
            </div>
        </div>
    )
}