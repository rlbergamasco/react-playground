import { IconButton, withStyles } from '@material-ui/core';
import { Stars } from '@material-ui/icons';
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

export const StarButton = withStyles(styles)(({disabled, classes}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(changeDotStatus(2))
    };

    return (
        <IconButton disableRipple disabled={disabled} className={classes.disableHover} onClick={handleClick}>
            <Stars className={classes.button} />
        </IconButton>
    )
});

StarButton.propTypes = {
    disabled: PropTypes.bool,
};

StarButton.defaultProps = {
    disabled: false,
};