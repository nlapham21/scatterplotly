import React, { Component } from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap'
import { json } from 'd3';

import ChartWrapper from './ChartWrapper';
import Table from './Table';

class App extends Component {
    state = {
        data: []
    }

    updateData = (data) => this.setState({ data })

    componentWillMount() {
        json("https://udemy-react-d3.firebaseio.com/children.json")
            .then((data) => this.setState({ data }))
            .catch((error) => console.log(error))
    }

    renderChart() {
        if (this.state.data.length === 0) {
            return "No data yet"
        }
        return <ChartWrapper data={this.state.data}/>
    }

    render() {
        return (
            <div>
                <Navbar bg="light">
                    <Navbar.Brand>ScatterPlotly</Navbar.Brand>
                </Navbar>
                <Container>
                    <Row>
                        <Col md={6} xs={12}>{this.renderChart()}</Col>
                        <Col md={6} xs={12}><Table data={this.state.data} updateData={this.updateData}/></Col>
                    </Row>
                </Container>
            </div>
          );
    }
}

export default App;
