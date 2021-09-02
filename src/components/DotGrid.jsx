import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { DotButton } from 'components';

export const DotGrid = () => {
    const createDots = () => {
        let dotsTemp = []
        for (let i = 0; i < 5; i++) {
            dotsTemp.push(
                <Grid key={i} container justifyContent="center">
                    <Grid item><DotButton index={i*5+1}/></Grid>
                    <Grid item><DotButton index={i*5+2}/></Grid>
                    <Grid item><DotButton index={i*5+3}/></Grid>
                    <Grid item><DotButton index={i*5+4}/></Grid>
                    <Grid item><DotButton index={i*5+5}/></Grid>
                </Grid>
            )
        }
        return dotsTemp;
    }
    const dots = createDots();

    return (
        <React.Fragment>
            <Typography variant="h6" align="center" color="textSecondary">Make a pink X</Typography>
            {dots}
        </React.Fragment>
    )
};