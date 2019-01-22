import React, { Component } from 'react'
import { List } from 'antd';
import FlightDetail from './FlightDetail';
const data = [
    'FAke DATA',
    'FAke DATA',
    'FAke DATA'
  ];
export default class FlightList extends Component {
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
