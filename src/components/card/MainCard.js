import React from 'react'
import CardComponent from './CardComponent'

function MainCard() {
    return (
        <div className='card-container container'>
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
        </div>
    )
}
export default MainCard
