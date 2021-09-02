import React from 'react';
import { Switch, Box, Grid } from '@material-ui/core';
import { DotGrid } from 'components';
import { selectIsDark, toggleIsDark, changeDotStatus, selectDotStatus, selectSelectedDots } from 'appSlice';
import { useSelector, useDispatch } from 'react-redux';

export const PartTwo = () => {
    const dispatch = useDispatch();
    const isDark = useSelector(selectIsDark);
    const dotStatus = useSelector(selectDotStatus);
    const selectedDots = useSelector(selectSelectedDots);
    const targetDots = [1, 5, 7, 9, 13, 17, 19, 21, 25];
    const disabled = !targetDots.every(v => selectedDots.includes(v));

    const handleChange = () => {
       dispatch(toggleIsDark());
       dispatch(changeDotStatus(4))
    };

    dispatch(changeDotStatus(3))

    return (
        <React.Fragment>
            <Box display="flex" justifyContent="center">
                <Switch
                disabled={disabled}
                checked={isDark}
                onChange={handleChange}
                name="dark-mode"
                />
            </Box>
            <DotGrid />
        </React.Fragment>
    )
};