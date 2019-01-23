import axios from 'axios';


export const getCardIdAeromexico = ()=>{

    return axios.post('https://aeromexico.com/api/v1/carts?store=mx&pos=WEB')
        .then(r=>{
            console.log(r)
            return r
        })
        .catch(e=>console.log(e))

}