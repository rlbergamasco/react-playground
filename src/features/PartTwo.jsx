import { Switch, Box } from '@material-ui/core';
import { selectIsDark, toggleIsDark, changeDotStatus, selectDotStatus } from 'appSlice';
import { useSelector, useDispatch } from 'react-redux';

export const PartTwo = () => {
    const dispatch = useDispatch();
    const isDark = useSelector(selectIsDark);
    const dotStatus = useSelector(selectDotStatus);
    const disabled = !dotStatus[4];

    const handleChange = () => {
       dispatch(toggleIsDark());
       dispatch(changeDotStatus(5))
    };

    dispatch(changeDotStatus(3))

    return (
        <Box display="flex" justifyContent="center">
            <Switch
            disabled={disabled}
            checked={isDark}
            onChange={handleChange}
            name="dark-mode"
            />
        </Box>
    )
};