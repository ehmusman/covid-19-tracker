import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles({
    root: {
        minWidth: 200
    },
    infected: {
        color: 'rgba(0,0,255,0.6)'
    },
    recovered: {
        color: 'rgba(0,255,0,0.5)'
    },
    deaths: {
        color: 'rgba(255,0,0,0.5)'
    }

});
function MyCard({
    title, subTitle, infected, recovered, deaths, lastUpdate
}) {
    const [showContent, setShowContent] = useState(false)
    const classes = useStyles();
    return (
        <Grid item md={4} sm={12} className={classes.root} >
            <Card variant='outlined'>
                <CardContent>
                    <Typography color="textPrimary" variant='h6' component='p'>
                        {title} <ArrowDropDownIcon style={{ fontSize: '50px', cursor: 'pointer' }}
                            onClick={() => setShowContent(!showContent)}
                        />
                    </Typography>
                    {showContent ? (
                        <>
                            <Typography color='textSecondary' variant="h6" component="p">
                                Covid Statics in {subTitle}
                            </Typography>
                            <Typography color="textPrimary" className={classes.infected} variant='h6' component='p'>
                                Infected
                        <CountUp
                                    start={0}
                                    end={infected}
                                    duration={2}
                                    separator=','
                                />

                            </Typography>
                            <Typography color="textPrimary" variant='h6' component='p' className={classes.recovered}>
                                Recovered
                        <CountUp
                                    start={0}
                                    end={recovered}
                                    duration={2}
                                    separator=','
                                />
                            </Typography>
                            <Typography color="textPrimary" variant='h6' component='h5' className={classes.deaths}>
                                Death
                        <CountUp
                                    start={0}
                                    end={deaths}
                                    duration={2}
                                    separator=','
                                />
                            </Typography>
                            <Typography variant="body2" component="h6">
                                Last Update of Covid-19 {new Date(lastUpdate).toDateString()}
                            </Typography>
                        </>
                    ) : null}
                </CardContent>
            </Card>
        </Grid>
    )
}

export default MyCard
