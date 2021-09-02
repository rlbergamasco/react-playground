import React, { useState } from 'react';
import { Box, Grid, Button, Typography, Checkbox } from '@material-ui/core';
import { ApproveButton, IgnoreButton, InfoCard, Dropdown, Dot } from 'components';
import {
  selectDisableCheckboxes, selectNumCards, selectNumCols, selectSelectedItems,
  toggleDisableCheckboxes, resetState, changeNumCols, changeNumCards, selectDotStatus
} from 'appSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const numCols = useSelector(selectNumCols);
  const numCards = useSelector(selectNumCards);
  const dotStatus = useSelector(selectDotStatus);

  const dataArr = [
    {
      "id": 0,
      "col1": "Placeholder 1",
      "col2": "More columns",
      "col3": "Placeholder 3",
      "col4": "Placeholder 4",
      "col5": "Placeholder 5",
      "col6": "Placeholder 6",
      "col7": "Placeholder 7",
    },
    {
      "id": 1,
      "col1": "Placeholder 1",
      "col2": "Placeholder 2",
      "col3": "Placeholder 3",
      "col4": "Placeholder 4",
      "col5": "Placeholder 5",
      "col6": "More cards",
      "col7": "Placeholder 7",
    },
    {
      "id": 2,
      "col1": "Placeholder 1",
      "col2": "Click No",
      "col3": "Placeholder 3",
      "col4": "Placeholder 4",
      "col5": "Placeholder 5",
      "col6": "Placeholder 6",
      "col7": "Placeholder 7",
    },
    {
      "id": 3,
      "col1": "Placeholder 1",
      "col2": "Placeholder 2",
      "col3": "Placeholder 3",
      "col4": "Checkbox",
      "col5": "Placeholder 5",
      "col6": "Placeholder 6",
      "col7": "Placeholder 7",
    },
    {
      "id": 4,
      "col1": "Placeholder 1",
      "col2": "Placeholder 2",
      "col3": "Placeholder 3",
      "col4": "Click Yes",
      "col5": "Placeholder 5",
      "col6": "Placeholder 6",
      "col7": "Placeholder 7",
    },
    {
      "id": 5,
      "col1": "Placeholder 1",
      "col2": "Placeholder 2",
      "col3": "Placeholder 3",
      "col4": "Placeholder 4",
      "col5": "Placeholder 5",
      "col6": "Placeholder 6",
      "col7": "Try zero cards",
    }
  ].slice(0, numCards);

  const dataLabels = ["COLUMN 1", "COLUMN 2", "COLUMN 3", "COLUMN 4", "COLUMN 5", "COLUMN 6", "COLUMN 7"].slice(0, numCols);
  const buttonLabels = ["YES", "NO"];
  const dataPoints = ["col1", "col2", "col3", "col4", "col5", "col6", "col7"].slice(0, numCols);
  const disableCheckboxes = useSelector(selectDisableCheckboxes)
  const selectedItems = useSelector(selectSelectedItems);
  const dispatch = useDispatch();

  const [isStarted, setIsStarted] = useState(false);

  const onChange = () => {
    dispatch(toggleDisableCheckboxes());
  }

  const handleStart = () => {
    setIsStarted(true);
  }

  const handleReset = () => {
    setIsStarted(false);
    dispatch(resetState());
  }

  const enableCheckbox = !dotStatus[0] && !dotStatus[1];

  return (
    <Box m={2}>
      <Typography variant="h2" align="center">Welcome to my React playground!</Typography>
      <Typography variant="h6" align="center">Click on different buttons to reveal more components, find hints, and light up all the dots.</Typography>
      <Box m={2} display="flex" justifyContent="center">
        {dotStatus.map((status, i) => (
          <Dot key={i} disabled={status} />
        ))}
      </Box>


      {isStarted ?
        <React.Fragment>
          <Grid container alignItems="center">
            <Grid item>
              {enableCheckbox ? <Box mb={2} display="flex" justifyContent="flex-start" alignItems="center">
                <Checkbox onChange={onChange} checked={!disableCheckboxes} />
                {disableCheckboxes ? null : <React.Fragment><ApproveButton disabled={!selectedItems.length} /> <IgnoreButton disabled={!selectedItems.length} /> </React.Fragment>}
              </Box>
                : null}
            </Grid>
            <Grid item style={{ flexGrow: 1 }} />
            <Grid item>
              <Box mb={2} display="flex" justifyContent="flex-end" alignItems="center">
                <Dropdown min={0} max={6} selected={numCards} handleSet={changeNumCards} label="Card Count" />
                <Dropdown min={3} max={7} selected={numCols} handleSet={changeNumCols} label="Column Count" />
              </Box>
            </Grid>
          </Grid>
          {dataArr.map((data, i) => (
            <InfoCard key={i} data={data} dataLabels={dataLabels} buttonLabels={buttonLabels} dataPoints={dataPoints} disableCheckboxes={disableCheckboxes} />
          ))}
        </React.Fragment>
        :
        null
      }
      <Box m={4} display="flex" justifyContent="center">
        <Button onClick={isStarted ? handleReset : handleStart} variant="outlined" size="large">{isStarted ? "Reset" : "Start"}</Button>
      </Box>
    </Box>
  );
}

export default App;
