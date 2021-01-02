import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { fetchingPakistaniStatics } from '../api/Api'
import MyCard from './MyCard';

function Data() {
    const [load, setLoad] = useState(false);
    const [pakData, setPakData] = useState([]);
    useEffect(() => {
        const fetchingData = async () => {
            const { pakistan } = await fetchingPakistaniStatics()
            setPakData(pakistan)
            setLoad(true)
        }
        fetchingData()

    }, [!load])
    return (
        <Grid container spacing={1} className='card-container container'>
            {pakData.map((data, i) => (
                <MyCard
                    key={i}
                    title={data.combinedKey}
                    subTitle={data.provinceState}
                    infected={data.confirmed}
                    recovered={data.recovered}
                    deaths={data.deaths}
                    lastUpdate={data.lastUpdate}
                />
            ))}
        </Grid>
    )
}

export default Data
