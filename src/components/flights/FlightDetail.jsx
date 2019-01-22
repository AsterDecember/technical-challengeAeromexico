import React, { Component } from 'react'
import { Modal, Button } from 'antd';

export default class FlightList extends Component {
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
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Details
        </Button>
                <Modal
                    visible={visible}
                    title="Flight Details"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[]}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}
