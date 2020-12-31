import React, { useEffect } from 'react'
import axios from 'axios'

function Api() {
    const url = 'https://covid19.mathdro.id/api'
    useEffect(() => {
        const mainApi = async () => {
            try {
                const { data } = await axios.get(url)
                console.log(data)
                console.log(data.confirmed.value)
                console.log(data.recovered.value)
                console.log(data.deaths.value)
            } catch {

            }
        }
        mainApi()
    }, [])
    return (
        <div>

        </div>
    )
}

export default Api
