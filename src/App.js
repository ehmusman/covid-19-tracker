
import React, { Component } from 'react'
import MainCard from './components/card/MainCard'
import './App.css'
import { fetchData } from './components/api/Api'
import ChartData from './components/chart/ChartData'
import SelectData from './components/countriesSelector/SelectData'

class App extends Component {
    state = {
        data: [],
        country: ''
    }
    async componentDidMount() {
        const data = await fetchData()
        this.setState({ data: data })
    }
    selectCountry = async (country) => {
        const data = await fetchData(country)
        this.setState({
            data: data,
            country: country
        })
    }


    render() {
        const { data, country } = this.state;
        return (
            <>
                <MainCard
                    data={data}
                />
                <SelectData
                    selectCountry={this.selectCountry} />
                <ChartData country={country} />
            </>
        )

    }
}
export default App
