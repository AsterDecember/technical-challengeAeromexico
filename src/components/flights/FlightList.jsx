import React, { Component } from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { List } from 'antd';
import FlightDetail from './FlightDetail';
import {getFlightsSaga} from '../../actions/flightActions'

const data = [
    'FAke DATA',
    'FAke DATA',
    'FAke DATA'
  ];

class FlightList extends Component {
    componentDidMount(){
        this.props.getFlightsSaga()
    }
    render() {
        return (
            <div>
                <List
                    header={<div>Vuelos</div>}
                    footer={<div>Aeromexico</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (<List.Item>
                        Info: 
                        <FlightDetail />
                    </List.Item>)}
                />
            </div>
        )
    }
}


//Set the main stage to props i need to use on this component
const mapStateToProps = (state) => {
    const {
        aeromexicoFlights,
        
    } = state;

    return {
        aeromexicoFlights,
    };
};

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        getFlightsSaga
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(FlightList);
