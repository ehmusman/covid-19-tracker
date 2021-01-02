// eslint-disable-next-line 

import { Grid } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2'

import { fetchData } from '../api/Api'

function ChartCountryData({ country }) {
    const [chartData, setChartData] = useState({})
    const [chartOptions, setChartOptions] = useState({})
    const [load, setLoad] = useState(true)
    const [countryData, setCountryData] = useState({})
    useEffect(() => {
        const getCountryData = async () => {
            const [confirmed, recovered, deaths, lastUpdate] = await fetchData(country)

            setCountryData({
                confirmed: confirmed.value,
                recovered: recovered.value,
                deaths: deaths.value,
                lastUpdate
            })
            setLoad(false)
            getBarChartData();
            // eslint-disable-next-line 
            getBarChartOptions();
            // eslint-disable-next-line 
        }
        getCountryData()
        // eslint-disable-next-line

    }, [load || country || setCountryData])
    // eslint-disable-next-line
    const getBarChartData = () => {
        setChartData({
            labels: ["Confirmed", "Recovered", 'Deaths'],
            datasets: [
                {

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
                display: false,
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
                },
                width: '100%'
            },
            tooltips: {
                enabled: true // true, false
            }

        })
    }
    return (
        <Grid container spacing={3} className='card-container container'>
            <Grid item lg={12} md={12} sm={12}>
                <Pie
                    style={{ position: 'relative', height: '40vh', width: '80vw' }}
                    width={600} height={250}
                    data={chartData}
                    options={chartOptions}
                />
            </Grid>
        </Grid>

    )
}

export default ChartCountryData