import React  from 'react';
import PropTypes from 'prop-types'
import classes from './Button.module.css'

const Button = ({color, onClick, text}) => {
    return (
        <button className={classes.buttonStyle} style={{backgroundColor : color}} onClick={onClick}  >{text}</button>
    )

};

Button.propTypes = {
    text : PropTypes.string.isRequired,
    onClick : PropTypes.func,
    color: PropTypes.string
};

Button.defaultProps = {
    color: 'rgba(129,5,0,0.55)'
};

export default Button