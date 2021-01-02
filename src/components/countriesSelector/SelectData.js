import { FormControl, InputLabel } from '@material-ui/core'
import Select from '@material-ui/core/Select';
import { fetchAllCountries } from '../api/Api'
import React, { useState, useEffect } from 'react'

function SelectData({ selectCountry }) {
    const [value, setValue] = useState('')
    const [countriesData, setCountriesData] = useState([])

    const handleChange = (e) => {
        setValue(e.target.value)
        selectCountry(e.target.value)
    }
    useEffect(() => {
        const getAllCountriesData = async () => {
            const data = await fetchAllCountries()
            setCountriesData(data)
        }
        getAllCountriesData()
    }, [setCountriesData])
    return (
        <div className='container'>
            <FormControl variant="outlined" >
                <InputLabel htmlFor="outlined-age-native-simple">Select City</InputLabel>
                <Select
                    native
                    value={value}
                    onChange={handleChange}
                    label="Select Country"
                >
                    <option aria-label="None" value="" />
                    {countriesData.length !== 0 ? (
                        countriesData.map(country => (
                            <option key={country} value={country}>{country}</option>
                        ))
                    ) : null}
                </Select>
            </FormControl>
        </div>
    )
}
export default SelectData
