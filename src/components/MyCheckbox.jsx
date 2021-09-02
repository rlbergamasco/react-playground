import { Checkbox, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = () => ({
    box: {
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
    }
});

export const MyCheckbox = withStyles(styles)(({onChange, checked, classes}) => {
    return (
        <Checkbox
         checked={checked}
         color="primary"
         onChange={onChange}
         size="small"
         className={classes.box} 
        />
    )
});

MyCheckbox.propTypes = {
    onChange: PropTypes.func,
    checked: PropTypes.bool.isRequired
};

MyCheckbox.defaultProps = {
    onChange: () => null
};