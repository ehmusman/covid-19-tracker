
const CovidReducer = (state, action) => {
    switch (action.payload) {
        case 'TOTAL_CASES':
            return {
                ...state,
                totalCases: action.payload
            }
        default:
            return state;
    }
}

export default CovidReducer