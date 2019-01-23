import React, { Component } from 'react';
import { Layout } from 'antd';
import FlightList from './flights/FlightList';

const {
  Header, Footer, Content,
} = Layout;

class Home extends Component {
    render() {
        return (
            <Layout>
                <Header>Aeromexico Vuelos</Header>
                <Content>
                    <FlightList />
                </Content>
                <Footer>Code by: Miguel Gomez</Footer>
            </Layout>
        );
    }
}

export default Home;