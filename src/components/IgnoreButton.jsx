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

export const IgnoreButton = withStyles(styles)(({id, special, disabled, classes}) => {
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

IgnoreButton.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]).isRequired,
    disabled: PropTypes.bool,
};

IgnoreButton.defaultProps = {
    disabled: false,
};