// eslint-disable-next-line 

import { Grid } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../api/Api'
import ChartComponent from './ChartComponent'

function ChartData({ country }) {
    const [chartData, setChartData] = useState({})
    const [chartOptions, setChartOptions] = useState({})
    const [load, setLoad] = useState(true)
    const [data, setData] = useState({})
    useEffect(() => {
        const totalDailyData = async () => {
            const data = await fetchDailyData()
            setData(data)
            setLoad(false)
            getChartData();
            getChartOptions();
        }

        totalDailyData()// eslint-disable-next-line react-hooks/exhaustive-deps

    }, [load || country])

    const getChartData = () => {
        setChartData({
            labels: data.date,
            datasets: [
                {
                    label: 'Confirmed Cases',
                    data: data.confirmed,
                    backgroundColor: 'rgba(0,0,255,.6)',
                    borderWidth: 2,
                    borderColor: "#00f",
                    hoverBorderWidth: 3,
                    hoverBorderColor: "#000"
                },
                {
                    label: 'Confirmed Deaths',
                    data: data.deaths,
                    backgroundColor: 'rgba(255,0,0,.6)',
                    borderWidth: 2,
                    borderColor: "#f00",
                    hoverBorderWidth: 3,
                    hoverBorderColor: "#000"
                }
            ]
        })
    }
    const getChartOptions = () => {
        setChartOptions({
            title: {
                display: true,
                text: 'Daily Corona Update',
                fontSize: 25
            },
            legend: {
                display: true,
                position: 'top', // top, bottom ,left, right
                labels: {
                    fontColor: '#000'
                }
            },
            layout: {
                padding: {
                    left: 150,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            tooltips: {
                enabled: true // true, false
            }

        })
    }
    return (
        <Grid container spacing={3} className='card-container container'>
            <ChartComponent
                chartData={chartData}
                chartOptions={chartOptions}
            />
        </Grid>

    )
}

export default ChartData
