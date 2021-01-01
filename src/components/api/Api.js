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
        const { data } = await axios.get(`${url}/countries`)
        console.log(data)
    } catch {

    }
}