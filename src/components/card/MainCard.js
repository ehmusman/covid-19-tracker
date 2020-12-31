import { Grid } from '@material-ui/core'
import React from 'react'
import CardComponent from './CardComponent'

function MainCard() {
    return (
        <Grid container spacing={3} className='card-container container'>
            <CardComponent
                heading='Infected'
                numbers='12345'
                date='date'
                identity='infected'
            />
            <CardComponent
                heading='Recovered'
                numbers='12345'
                date='date'
                identity='recovered'
            />
            <CardComponent
                heading='Deaths'
                numbers='12345'
                date='date'
                identity='death'
            />
        </Grid >
    )
}
export default MainCard
