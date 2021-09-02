import { Dialog, Button, DialogTitle, Box, withStyles } from '@material-ui/core';
import { changeDotStatus } from 'appSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  button: {
    margin: '10px'
  }
});

export const ConfirmDialog = withStyles(styles)(({ onClose, special, open, classes }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    onClose();
  };

  const handleApprove = () => {
    if (special) {
      dispatch(changeDotStatus(1))
    }
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="lg" style={{margin: "20px"}}>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <DialogTitle>Are you sure?</DialogTitle>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <Button onClick={handleClose} color="primary" className={classes.button}>Cancel</Button>
          <Button onClick={handleApprove} color="primary" className={classes.button}>Yes</Button>
        </Box>
    </Dialog>
  );
});

ConfirmDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};