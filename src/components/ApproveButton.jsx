import React, {useState} from 'react';
import { IconButton, withStyles } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';
import { ConfirmDialog } from 'components';
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

export const ApproveButton = withStyles(styles)(({id, handleRefresh, disabled, classes}) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <IconButton disableRipple disabled={disabled} className={classes.disableHover} onClick={handleClickOpen}>
                <CheckCircle className={classes.button} />
            </IconButton>
            <ConfirmDialog open={open} onClose={handleClose} id={id} handleRefresh={handleRefresh} />
        </React.Fragment>
    )
});

ApproveButton.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]).isRequired,
    handleRefresh: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

ApproveButton.defaultProps = {
    disabled: false,
};