import React from "react";
import PropTypes from 'prop-types'

import classes from './ButtonClose.module.css'

const ButtonClose = ({onClick}) =>  {
    return (
        <button className={classes.buttonClose} onClick={onClick}>
            &times;
        </button>
    )
};

ButtonClose.propTypes = {
    onClick: PropTypes.func,

};

export default ButtonClose;