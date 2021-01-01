
import React, { Component } from 'react'
import MainCard from './components/card/MainCard'
import './App.css'
import { fetchData, getAllCountriesData } from './components/api/Api'
import ChartData from './components/chart/ChartData'

class App extends Component {
    state = {
        data: []
    }
    async componentDidMount() {
        const data = await fetchData()
        this.setState({ data: data })
    }

    render() {
        const { data } = this.state;
        // console.log(data)
        return (
            <>
                <MainCard
                    data={data}
                />
                <ChartData />
            </>
        )

    }
}
export default App
