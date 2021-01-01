import React from 'react'
import { Line } from 'react-chartjs-2'

function ChartComponent(props) {
    return (
        <Line
            data={props.chartData}
            options={props.chartOptions}
        />
    )
}

export default ChartComponent
