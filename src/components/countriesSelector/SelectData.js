import { FormControl, InputLabel } from '@material-ui/core'
import NativeSelect from '@material-ui/core/NativeSelect';
import { fetchAllCountries } from '../api/Api'
import React, { useState, useEffect } from 'react'

function SelectData({ selectCountry }) {
    const [countriesData, setCountriesData] = useState([])

    const handleChange = (e) => {
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
                <InputLabel htmlFor="outlined-age-native-simple">Select Country
                </InputLabel>
                <NativeSelect

                    onChange={handleChange}
                    label="Select Country"
                >
                    <option aria-label="None" value="" />
                    <option value="">Global</option>
                    {countriesData.length !== 0 ? (
                        countriesData.map(country => (
                            <option key={country} value={country}>{country}</option>
                        ))
                    ) : null}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
export default SelectData
