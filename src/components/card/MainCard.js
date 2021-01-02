import { Grid } from '@material-ui/core'
import React from 'react'
import CardComponent from './CardComponent'

function MainCard(props) {
    const [confirmed, recovered, deaths, lastUpdate] = props.data

    if (!confirmed || !recovered || !deaths || !lastUpdate) {
        return 'Loading...'
    }
    return (
        <Grid container spacing={3} className='card-container container'>
            <CardComponent
                heading='Infected'
                numbers={confirmed.value}
                date={new Date(lastUpdate).toDateString()}
                identity='infected'
            />
            <CardComponent
                heading='Recovered'
                numbers={recovered.value}
                date={new Date(lastUpdate).toDateString()}
                identity='recovered'
            />
            <CardComponent
                heading='Deaths'
                numbers={deaths.value}
                date={new Date(lastUpdate).toDateString()}
                identity='death'
            />
        </Grid >
    )
}
export default MainCard
