import { Grid } from '@material-ui/core'
import React from 'react'
import { Bar, Line } from 'react-chartjs-2'

function ChartComponent(props) {
    return (
        <Grid item lg={12} md={12} sm={12}>
            {props.country ? (
                <Bar
                    data={props.chartData}
                    options={props.chartOptions}
                />

            ) : (
                    <Line
                        data={props.chartData}
                        options={props.chartOptions}
                    />

                )}

        </Grid>
    )
}

export default ChartComponent
