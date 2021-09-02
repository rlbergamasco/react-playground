import { Typography, Tooltip, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = (theme) => ({
    hover: {
        textDecoration: 'underline',
        textDecorationColor: theme.palette.info.light,
        textDecorationThickness: '3px',
        '&:hover': {
            textDecorationColor: theme.palette.info.main,
        },
    }
});

export const EmailTooltip = withStyles(styles)(({emails, count, classes}) => {
    return (
        <Tooltip enterDelay={500} enterNextDelay={500}
            title={<div style={{whiteSpace: 'pre-line'}}>{emails}</div>}
            className={classes.hover}>
            {count === 1 ? <Typography noWrap>{count} Recipient</Typography> : <Typography noWrap>{count} Recipients</Typography>}
        </Tooltip>
    )
});

EmailTooltip.propTypes = {
    emails: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired
};
