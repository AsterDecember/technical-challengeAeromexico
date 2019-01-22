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
                <Header>Header</Header>
                <Content>
                    <FlightList />
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}

export default Home;