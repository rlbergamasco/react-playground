import { Card, CardContent, Box, Typography, Grid, Checkbox, withStyles } from '@material-ui/core';
import { ApproveButton, IgnoreButton } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { selectSelectedItems, toggleItem } from 'appSlice';
import PropTypes from 'prop-types';

const styles = () => ({
    buttonWidth: {
        width: '10%'
    },
});

export const InfoCard = ({ data, dataLabels, buttonLabels, dataPoints, disableCheckboxes }) => {
    const dispatch = useDispatch();
    const selectedItems = useSelector(selectSelectedItems);
    const dataWidth = (100 - (buttonLabels.length * 10)) / dataLabels.length + "%";

    return (
        <Card variant="outlined" style={{ marginBottom: '20px' }}>
            <CardContent style={{ padding: disableCheckboxes ? '16px 20px 16px 20px' : '16px 0 16px 0' }}>
                <Grid container direction="row" justify="center" alignItems="center">
                    {disableCheckboxes ? null :
                    <Grid item style={{width: "6%"}}>
                        <Checkbox
                            checked={selectedItems.includes(data.id)}
                            onChange={() => dispatch(toggleItem(data.id))}
                        />
                    </Grid>
                    }
                    <Grid item xs={disableCheckboxes ? 12 : "auto"} style={{width: disableCheckboxes ? "auto" : "94%"}}>
                        <LabelRow dataLabels={dataLabels} buttonLabels={buttonLabels} dataWidth={dataWidth}/>
                        <DataRow data={data} dataPoints={dataPoints} dataWidth={dataWidth}
                            buttonLabels={buttonLabels}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card >
    )
};

const LabelRow = withStyles(styles)(({dataLabels, buttonLabels, dataWidth, classes}) => {
    return (
        <Grid container direction="row" justify="center" alignItems="center" spacing={3} >
            {dataLabels.map((label, i) => (
                <Grid item style={{width: dataWidth}} key={i}>
                    <Typography noWrap variant="body2" color="textSecondary">{label}</Typography>
                </Grid>
            ))}
            {buttonLabels.map((label, i) => (
                <Grid item className={classes.buttonWidth} key={i}>
                    <Typography align="center" noWrap variant="body2" color="textSecondary">{label}</Typography>
                </Grid>
            ))}
        </Grid>
    )
});

const DataRow = withStyles(styles)(({ data, dataPoints, dataWidth, buttonLabels, classes}) => {
    return (
        <Grid container direction="row" justify="center" alignItems="center" spacing={3} >
            {dataPoints.map((label, i) => (
                <Grid item style={{width: dataWidth}} key={i}>
                    <Typography >{data[label]}</Typography>
                </Grid>
            ))}
            {buttonLabels.includes("YES") ? 
            <Grid item className={classes.buttonWidth}>
                <Box display='flex' justifyContent="center">
                    <ApproveButton special={data.id === 4} id={data.id}/>
                </Box>
            </Grid>
            : null
            }
            {buttonLabels.includes("NO") ? 
            <Grid item className={classes.buttonWidth}>
                <Box display='flex' justifyContent="center">
                    <IgnoreButton special={data.id === 2} id={data.id}/>
                </Box>
            </Grid>
            : null
            }
        </Grid>
    )
});

InfoCard.propTypes = {
    data: PropTypes.object.isRequired,
    dataLabels: PropTypes.array.isRequired,
    buttonLabels: PropTypes.array.isRequired,
    dataPoints: PropTypes.array.isRequired,
    disableCheckboxes: PropTypes.bool,
};

InfoCard.defaultProps = {
    disableCheckboxes: false
};