//Action Types
export const FETCH_FLIGHT_SAGA = 'FETCH_FLIGHT_SAGA'
export const GET_FLIGHT_SAGA = 'GET_FLIGHT_SAGA'

//Action Creators

export const getFlightsSaga = (payload) => ({
    type : GET_FLIGHT_SAGA,
    payload
})

export const fetchFlightsSaga = (payload) => ({
    type : FETCH_FLIGHT_SAGA,
    payload
})
