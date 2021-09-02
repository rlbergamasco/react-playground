import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { ApproveButton, IgnoreButton, InfoCard, MyCheckbox } from 'components';
import { selectDisableCheckboxes, selectNumCards, selectNumCols, selectSelectedItems, toggleDisableCheckboxes } from 'appSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const numCols = useSelector(selectNumCols);
  const numCards = useSelector(selectNumCards);

  const dataArr = [
    {
      "id": 1,
      "col1": "Placeholder 1",
      "col2": "Placeholder 2",
      "col3": "Placeholder 3",
      "col4": "Placeholder 4",
      "col5": "Placeholder 5",
      "col6": "Placeholder 6",
      "col7": "Placeholder 7",
    },
    {
      "id": 2,
      "col1": "Placeholder 1",
      "col2": "Placeholder 2",
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
      "col4": "Placeholder 4",
      "col5": "Placeholder 5",
      "col6": "Placeholder 6",
      "col7": "Placeholder 7",
    },
    {
      "id": 4,
      "col1": "Placeholder 1",
      "col2": "Placeholder 2",
      "col3": "Placeholder 3",
      "col4": "Placeholder 4",
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
      "col7": "Placeholder 7",
    },
    {
      "id": 6,
      "col1": "Placeholder 1",
      "col2": "Placeholder 2",
      "col3": "Placeholder 3",
      "col4": "Placeholder 4",
      "col5": "Placeholder 5",
      "col6": "Placeholder 6",
      "col7": "Placeholder 7",
    }
  ].slice(0, numCards);

  const dataLabels = ["COLUMN 1", "COLUMN 2", "COLUMN 3", "COLUMN 4", "COLUMN 5", "COLUMN 6", "COLUMN 7"].slice(0, numCols);
  const buttonLabels = ["YES", "NO"];
  const dataPoints = ["col1", "col2", "col3", "col4", "col5", "col6", "col7"].slice(0, numCols);
  const disableCheckboxes = useSelector(selectDisableCheckboxes)
  const selectedItems = useSelector(selectSelectedItems);
  const dispatch = useDispatch();

  const onChange = () => {
    dispatch(toggleDisableCheckboxes());
  }
  return (
    <Box m={2}>
      <Typography variant="h2" align="center">Welcome to my React playground!</Typography>
      <Typography variant="h6" align="center">Click on different buttons to reveal more components, find hints, and discover hidden messages.</Typography>
      <Box mb={2} display="flex" justifyContent="flex-start" alignItems="center">
        <MyCheckbox onChange={onChange} checked={!disableCheckboxes} />
        <Typography>Enable Checkboxes</Typography>
        {disableCheckboxes ? null : <React.Fragment><ApproveButton disabled={!selectedItems.length} /> <IgnoreButton disabled={!selectedItems.length} /> </React.Fragment>}
      </Box>
      {dataArr.map((data, i) => (
        <InfoCard key={i} data={data} dataLabels={dataLabels} buttonLabels={buttonLabels} dataPoints={dataPoints} disableCheckboxes={disableCheckboxes} />
      ))}
    </Box>
  );
}

export default App;
