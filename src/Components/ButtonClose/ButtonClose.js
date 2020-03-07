import React from "react";
import PropTypes from 'prop-types'


const ButtonClose = ({onClick}) =>  {
    return (
        <button className={'buttonClose'} onClick={onClick}>
            &times;
        </button>
    )
};

ButtonClose.propTypes = {
    onClick: PropTypes.func,

};

export default ButtonClose;