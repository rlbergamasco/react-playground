import { IconButton, withStyles } from '@material-ui/core';
import { RemoveCircle } from '@material-ui/icons';
import { changeDotStatus } from 'appSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const styles = (theme) => ({
    button: {
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
        '&:hover': {
            color: theme.palette.primary.main,
        }
    },
    disableHover: {
        '&:hover': {
            background: 'none'
        }
    }
});

export const NoButton = withStyles(styles)(({special, disabled, classes}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
       if (special) {
        dispatch(changeDotStatus(0))
       }
    };

    return (
        <IconButton disableRipple disabled={disabled} className={classes.disableHover} onClick={handleClick}>
            <RemoveCircle className={classes.button} />
        </IconButton>
    )
});

NoButton.propTypes = {
    disabled: PropTypes.bool,
};

NoButton.defaultProps = {
    disabled: false,
};