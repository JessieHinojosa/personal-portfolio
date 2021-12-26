import React from 'react'

const MdButton = (props) => {
    return (
        <div className={props.buttonClass}
        
        >
            <a href={props.url}>
            {props.buttonText}
            </a>
        </div>
    )
}

export default MdButton
