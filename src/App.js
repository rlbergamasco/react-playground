import React, { useState } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { Dot } from 'components';
import { PartOne } from 'features';
import { selectNumCards, resetState, selectDotStatus } from 'appSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const numCards = useSelector(selectNumCards);
  const dotStatus = useSelector(selectDotStatus);
  const dispatch = useDispatch();

  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  }

  const handleReset = () => {
    setIsStarted(false);
    dispatch(resetState());
  }

  return (
    <Box m={3}>
      <Typography variant="h2" align="center">Welcome to my React playground!</Typography>
      <Typography variant="h6" align="center">Click on different buttons to reveal more components, find hints, and light up all the dots.</Typography>
      <Box m={2} display="flex" justifyContent="center">
        {dotStatus.map((status, i) => (
          <Dot key={i} disabled={status} />
        ))}
      </Box>
      {isStarted ? numCards === 0 && !dotStatus[0] && !dotStatus[1] && !dotStatus[2] ?
        <Typography align="center">Part 2</Typography>
        :
        <PartOne />
        : null
      }
      <Box m={4} display="flex" justifyContent="center">
        <Button onClick={isStarted ? handleReset : handleStart} variant="outlined" size="large">{isStarted ? "Reset" : "Start"}</Button>
      </Box>
    </Box>
  );
}

export default App;
