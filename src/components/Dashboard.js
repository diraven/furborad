import React from 'react';
import Case from './Case';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Dashboard({cases}) {
    return (
        <Container className="pt-5">
            <Row>
                {cases.map(c => <Col className={"p-1"} md={4}><Case case={c}/></Col>)}
            </Row>
        </Container>
    );
}
