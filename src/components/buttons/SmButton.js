import React from 'react'

const SmButton = (props) => {
    return (
        <a href={props.url} >
        <div className={props.buttonClass}
        >
            {props.buttonText}
        </div>
        </a>
    )
}

export default SmButton
