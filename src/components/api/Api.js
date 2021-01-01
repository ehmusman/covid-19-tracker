import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
    try {
        const { data } = await axios.get(url)
        return [data.confirmed, data.recovered, data.deaths, data.lastUpdate]
    } catch {

    }
}
export const getAllCountriesData = async () => {
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