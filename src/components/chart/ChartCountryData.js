// eslint-disable-next-line 

import { Grid } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { fetchData } from '../api/Api'

function ChartCountryData({ country }) {
    // console.log(country)
    const [chartData, setChartData] = useState({})
    const [chartOptions, setChartOptions] = useState({})
    const [load, setLoad] = useState(true)
    const [countryData, setCountryData] = useState({})
    useEffect(() => {
        const getCountryData = async () => {
            const [confirmed, recovered, deaths, lastUpdate] = await fetchData(country)
            // console.log(confirmed, recovered, deaths, lastUpdate)
            setCountryData({
                confirmed: confirmed.value,
                recovered: recovered.value,
                deaths: deaths.value,
                lastUpdate
            })
            setLoad(false)
            getBarChartData();
            getBarChartOptions();
        }
        getCountryData()

    }, [load || country])

    const getBarChartData = () => {
        setChartData({
            labels: ["Confirmed", "Recovered", 'Deaths'],
            datasets: [
                {
                    label: 'Confirmed Cases',
                    data: [countryData.confirmed, countryData.recovered, countryData.deaths],
                    backgroundColor: ['rgba(0,0,255,.6)', 'rgba(0,255,0,.6)', 'rgba(255,0,0,.6)'],
                    borderWidth: 1,
                    borderColor: "#000",
                    hoverBorderWidth: 3,
                    hoverBorderColor: "#000"
                }
            ]
        })
    }
    const getBarChartOptions = () => {
        setChartOptions({
            title: {
                display: true,
                text: `Latest Update About ${country}`,
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
                    left: 0,
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
            <Grid item lg={12} md={12} sm={12}>
                <Bar
                    data={chartData}
                    options={chartOptions}
                />
            </Grid>
        </Grid>

    )
}

export default ChartCountryData