import React from 'react'

import { AppBar, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        backgroundColor: '00f'
    }
});

function Header() {
    const classes = useStyles()

    return (

        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container
                    alignItems='center'
                >
                    <Grid item  >
                        <Typography
                            variant='h5'
                            component='div'
                        >
                            Covid19
                    </Typography>
                    </Grid>
                    <Grid item sm></Grid>

                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header
