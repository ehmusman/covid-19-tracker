
import React, { Component } from 'react'
import MainCard from './components/card/MainCard'
import './App.css'
import { fetchData } from './components/api/Api'
import ChartData from './components/chart/ChartData'
import SelectData from './components/countriesSelector/SelectData'
import ChartCountryData from './components/chart/ChartCountryData'
import Data from './components/pakistan/Data'
import Header from './components/Header'
import { Typography } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'; class App extends Component {
    state = {
        data: [],
        country: '',
        showContent: false
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
    onClick = () => {
        this.setState({
            showContent: !this.state.showContent
        })
        console.log(this.state.showContent)
    }

    render() {
        const { data, country, showContent } = this.state;
        return (
            <>
                <Header />
                <div className="container">
                    <div style={{ display: 'flex', alignContent: 'center' }}>
                        <Typography
                            variant='h4'
                            component='div'
                        >
                            Statics of Pakistan
                    </Typography>
                        <ArrowDropDownIcon style={{ fontSize: '50px', cursor: 'pointer' }} onClick={this.onClick} />
                    </div>
                    <hr />
                    {showContent ? <Data /> : null}
                    <Data />
                </div>
                <MainCard
                    data={data}
                />
                <SelectData
                    selectCountry={this.selectCountry} />
                {country ? (
                    <ChartCountryData
                        country={country}
                    />
                ) : (
                        <ChartData
                            country={country}
                            CountryData={data}
                        />
                    )}

            </>
        )

    }
}
export default App
