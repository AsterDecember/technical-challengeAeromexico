import { call, put, takeEvery, all } from 'redux-saga/effects';
import {fetchFlightsSaga,
     GET_FLIGHT_SAGA} from '../actions/flightActions'
import {getCardIdAeromexico} from '../services/aeromexicoApi'

function* getFlights(){
    try{    
        const data =  yield call(getCardIdAeromexico)
        yield put(fetchFlightsSaga(data))
    }catch(e){
        console.log(e)
    }
} 

function* loadFlights(){
    yield takeEvery(GET_FLIGHT_SAGA,getFlights);
}

function* rootSaga() {
    yield all([
        loadFlights()
    ]);
}

export default rootSaga;