import React, { Component } from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import FlightDetail from './FlightDetail';
import {getFlightsSaga} from '../../actions/flightActions'
import { Empty } from 'antd';

class FlightList extends Component {
    componentDidMount(){
        this.props.getFlightsSaga()
    }
    drawFlights(flights){
        return flights._collection.map((e)=>{
            //console.log('info:',e)
            //return(<li>asdsad</li>)
            return e._collection.map((e)=>{
                return(<FlightDetail flight={e.segments._collection[0]}></FlightDetail>)
                //return(<div>_collection[""0""].segments._collection[""0""].marketingFlightCode</div>)
            })
        })
    }
    render() {
        const flights = this.props.aeromexicoFlights.flights._collection ? this.props.aeromexicoFlights.flights : []
        return (
            <div>
                
                <ul>
                    {flights._collection ? this.drawFlights(flights) : <Empty />}
                </ul>
                {flights._collection ? <div>informacion</div>:  <Empty />}
                
            </div>
        )
    }
}
//_collection[""0""]._collection[""0""].segments._collection[""0""].arrivalDateTime
//_collection[""0""]._collection[""0""].segments._collection[""0""].operatingFlightCode
//_collection

//Set the main stage to props i need to use on this component
const mapStateToProps = (state) => {
    const {
        aeromexicoFlights
    } = state;

    return {
        aeromexicoFlights
    };
};

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        getFlightsSaga
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(FlightList);
