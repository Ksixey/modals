import React from "react";
import PropTypes from 'prop-types'
import ButtonClose from "../ButtonClose/ButtonClose";
import classes from './Modal.module.css'

const Modal =({title,onClick,text,action, handleClick, bgColor}) =>{
    return (
        <div className={classes.overlay} onClick={onClick}  >
            <div className={classes.window} style={{backgroundColor : bgColor}} onClick={handleClick}>
                <div className={classes.container}>
                    <div className={classes.header}>
                        {title}
                        <ButtonClose onClick={onClick}/>
                    </div>
                    <div className={classes.body}>
                        {text}
                    </div>
                    <div className={classes.footer}>
                        {action}
                    </div>
                </div>
            </div>
        </div>
    )
};

Modal.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
    action: PropTypes.array
};

export default Modal;