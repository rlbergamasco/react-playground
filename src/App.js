import React, { useState } from 'react';
import { Box, Button, Typography, createTheme, ThemeProvider } from '@material-ui/core';
import { Dot } from 'components';
import { PartOne, PartTwo } from 'features';
import { selectNumCards, resetState, selectDotStatus, selectIsDark } from 'appSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const isDark = useSelector(selectIsDark);
  const numCards = useSelector(selectNumCards);
  const dotStatus = useSelector(selectDotStatus);
  const dispatch = useDispatch();

  const theme = createTheme({
    palette: {
      type: isDark ? 'dark' : 'light',
    }
  });

  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  }

  const handleReset = () => {
    setIsStarted(false);
    dispatch(resetState());
  }

  const partOneComplete = numCards === 0 && !dotStatus[0] && !dotStatus[1] && !dotStatus[2];
  const partTwoComplete = !dotStatus[4];

  return (
    <ThemeProvider theme={theme}>
      <Box minHeight="100vh" bgcolor="background.default">
        <Box p={3} bgcolor="background.default">
          <Typography variant="h2" color="textPrimary" align="center">Welcome to my React playground!</Typography>
          <Typography variant="h6" color="textSecondary" align="center">Click on different buttons to reveal more components, find hints, and light up all the dots.</Typography>
          <Box p={2} display="flex" justifyContent="center">
            {dotStatus.map((status, i) => (
              <Dot key={i} disabled={status} />
            ))}
          </Box>
          {isStarted ? partOneComplete ? partTwoComplete ?
            <Typography variant="h4" align="center" color="textPrimary">Congrats! You colored all the dots!</Typography>
            :
            <PartTwo />
            :
            <PartOne />
            :
            null
          }
          <Box m={4} display="flex" justifyContent="center">
            <Button onClick={isStarted ? handleReset : handleStart} variant="outlined" size="large">{isStarted ? "Reset" : "Start"}</Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
