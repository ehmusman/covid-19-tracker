
import React, { useEffect, useContext } from 'react'
import MainCard from './components/card/MainCard'
import './App.css'
import CovidState from './context/CovidState'
import ApiData from './ApiData'
function App() {

    return (
        <CovidState>
            <MainCard />
            <ApiData />
        </CovidState>
    )
}

export default App
