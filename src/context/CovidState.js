
import React, { useReducer } from 'react';
import CovidContext from './covidContext';
import CovidReducer from './covidReducer'

const CovidState = (props) => {
    const initialState = {
        totalCases: []
    }

    const [state, dispatch] = useReducer(CovidReducer, initialState)

    const collectData = (action) => {
        console.log(action)
        dispatch({
            type: action.type,
            payload: action.payload
        })
    }
    return <CovidContext.Provider
        value={{
            totalCases: state.totalCases,
            collectData
        }}>
        {props.children}
    </CovidContext.Provider>
}

export default CovidState;