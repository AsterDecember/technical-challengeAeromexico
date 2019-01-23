import {
    FETCH_FLIGHT_SAGA
} from "../actions/flightActions";

const aeromexicoFlights = (state = {
    flights:[]
}, action) => {
    switch (action.type) {
        case FETCH_FLIGHT_SAGA:
            const  { data } = action.payload
            console.log('reducer saga',action.payload)
            return { ...state,data}
        default:
            return state
    }
}

export default aeromexicoFlights;
