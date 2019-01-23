import axios from 'axios';
import flights from '../flights.json'

export const getCardIdAeromexico = ()=>{

    return axios.post('https://aeromexico.com/api/v1/carts?store=mx&pos=WEB')
        .then(r=>{
            console.log(r)
            return r
        })
        .catch(e=>{
            //console.log(e)
            //console.log('vuelos:',flights) 
            return flights
        })

}