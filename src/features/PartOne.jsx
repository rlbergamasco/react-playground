import React, { useState } from 'react';
import { Box, Grid, Button, Typography, Checkbox } from '@material-ui/core';
import { StarButton, InfoCard, Dropdown, Dot } from 'components';
import {
  selectDisableCheckboxes, selectNumCards, selectNumCols, selectSelectedItems,
  toggleDisableCheckboxes, resetState, changeNumCols, changeNumCards, selectDotStatus
} from 'appSlice';
import { useSelector, useDispatch } from 'react-redux';

export const PartOne = () => {
    const dispatch = useDispatch();
    const numCols = useSelector(selectNumCols);
    const numCards = useSelector(selectNumCards);
    const dotStatus = useSelector(selectDotStatus);
    const enableCheckbox = !dotStatus[0] && !dotStatus[1];

    const onChange = () => {
        dispatch(toggleDisableCheckboxes());
      }
    
    const dataArr = [
        {
          "id": 0,
          "col1": "Placeholder 1",
          "col2": "More cards",
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
          "col6": "Checkbox",
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
          "col1": "Star Button",
          "col2": "Placeholder 2",
          "col3": "Placeholder 3",
          "col4": "More columns",
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

    return (
        <React.Fragment>
          <Grid container alignItems="center">
            <Grid item style={{width: "10%"}}>
                <Box mb={2} display="flex" justifyContent="center" alignItems="center">
                {enableCheckbox
                    ? !disableCheckboxes
                    ? <StarButton disabled={!selectedItems.length} />
                    : <Checkbox onChange={onChange} checked={!disableCheckboxes} />
                    : null}
                </Box>
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
    )
};