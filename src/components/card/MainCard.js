import { Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import CovidContext from '../../context/covidContext'
import CardComponent from './CardComponent'

function MainCard() {
    const { totalCases } = useContext(CovidContext)
    if (totalCases.length !== 0) {
        console.log(totalCases)
    } else { console.log(2345) }
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
