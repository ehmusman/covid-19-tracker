import React, { useEffect, useContext } from 'react'
import { fetchData } from './components/api/Api'
import CovidContext from './context/covidContext'
function ApiData() {
    const { collectData } = useContext(CovidContext)
    useEffect(() => {
        const fetchingData = async () => {
            const response = await fetchData()
            collectData({
                type: 'TOTAL_CASES',
                payload: response
            })
        }
        fetchingData()
    }, [])
    return (
        <div>

        </div>
    )
}

export default ApiData
