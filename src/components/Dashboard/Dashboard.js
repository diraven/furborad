import React from 'react';
import Case from '../Case';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Dashboard() {
    return (
        <Container className="pt-5">
            <Row>
                <Col className={"p-1"} md={4}><Case/></Col>
                <Col className={"p-1"} md={4}><Case/></Col>
                <Col className={"p-1"} md={4}><Case/></Col>
                <Col className={"p-1"} md={4}><Case/></Col>
                <Col className={"p-1"} md={4}><Case/></Col>
                <Col className={"p-1"} md={4}><Case/></Col>
                <Col className={"p-1"} md={4}><Case/></Col>
                <Col className={"p-1"} md={4}><Case/></Col>
            </Row>
        </Container>
    );
}

export default Dashboard;
