import {
    FETCH_FLIGHT_SAGA
} from "../actions/flightActions";

const aeromexicoFlights = (state = {
    flights:{}
}, action) => {
    switch (action.type) {
        case FETCH_FLIGHT_SAGA:
            const   flights  = action.payload
            //console.log('reducer saga',action.payload)
            return { ...state,flights}
        default:
            return state
    }
}

export default aeromexicoFlights;
