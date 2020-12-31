import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function CardComponent({ heading, numbers, identity, date }) {
    console.log(heading, numbers, date, identity)
    const classes = useStyles();

    return (
        <div className={identity}>
            <Card className={classes.root} xs={12} md={12} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {heading}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {numbers}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {date}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Total Active Casses
                          <br />
                    </Typography>
                    <Typography variant="body2" component="p">
                        Covid-19
                          <br />
                    </Typography>

                </CardContent>
            </Card>
        </div>
    );
}
export default CardComponent;