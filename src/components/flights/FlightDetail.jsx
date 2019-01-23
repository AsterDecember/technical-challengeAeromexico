import React, { Component } from 'react'
import { Modal, Button, Timeline } from 'antd';

export default class FlightDetail extends Component {
    state = {
        loading: false,
        visible: false,
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }
    render() {
        const { visible, loading } = this.state;
        const { flight } = this.props
        console.log(this.props.flight)
        return (
            <li>
                <div>
                    <p>Aeropuerto:{this.props.flight.arrivalAirport}</p>
                    <p>Codigo de Vuelo:{this.props.flight.marketingFlightCode}</p>
                    <Button type="primary" onClick={this.showModal}>
                        Details
                </Button>
                </div>
                <Modal
                    visible={visible}
                    title="Detalles del vuelo"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[]}
                >
                    <p>Duracion:{flight.flightDurationInMinutes}</p>
                    <Timeline>
                        <Timeline.Item>
                            <p>{flight.departureAirport}</p>
                            <p>{flight.departureDateTime}</p>
                        </Timeline.Item>
                        <Timeline.Item>
                            <p>{flight.arrivalAirport}</p>
                            <p>{flight.arrivalDateTime}</p>
                        </Timeline.Item>
                    </Timeline>
                </Modal>
            </li>
        )
    }
}
