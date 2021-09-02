import { useState } from 'react';
import { IconButton, withStyles } from '@material-ui/core';
import { FiberManualRecord } from '@material-ui/icons';
import { toggleDot } from 'appSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const styles = (theme) => ({
    button: {
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
        '&:hover': {
            color: theme.palette.secondary.light,
        }
    },
    disableHover: {
        '&:hover': {
            background: 'none'
        }
    }
});

export const DotButton = withStyles(styles)(({index, classes}) => {
    const dispatch = useDispatch();
    const [color, setColor] = useState("disabled")

    const handleClick = () => {
        if (color === "disabled") { 
            setColor("secondary");
        } else {
            setColor("disabled");
        }
        dispatch(toggleDot(index));
    };

    return (
        <IconButton disableRipple className={classes.disableHover} onClick={handleClick}>
            <FiberManualRecord fontSize="large" color={color} className={classes.button} />
        </IconButton>
    )
});

DotButton.propTypes = {
    disabled: PropTypes.bool,
};

DotButton.defaultProps = {
    disabled: false,
};