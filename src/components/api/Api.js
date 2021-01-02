import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    let newUrl = url;
    if (country) {
        newUrl = `${url}/countries/${country}`
    }
    try {
        const { data } = await axios.get(newUrl)
        return [data.confirmed, data.recovered, data.deaths, data.lastUpdate]
    } catch (error) {
        console.log(error)
    }
}
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        const modefiedData = {
            confirmed: data.map(total => total.confirmed.total),
            deaths: data.map(total => total.deaths.total),
            date: data.map(total => total.reportDate)
        }
        return modefiedData
    } catch {

    }
}
export const fetchAllCountries = async () => {
    try {
        const { data } = await axios.get(`${url}/countries`)
        const modefiedData = {
            countryNames: data.countries.map(country => country.name)
        }
        return modefiedData.countryNames
    } catch {

    }
}