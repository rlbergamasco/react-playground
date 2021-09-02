import { IconButton, withStyles } from '@material-ui/core';
import { RemoveCircle } from '@material-ui/icons';
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

export const IgnoreButton = withStyles(styles)(({id, disabled, classes}) => {
    const handleClick = () => {
        Array.isArray(id) ? console.log("bulk ignore") : console.log("single ignore");
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