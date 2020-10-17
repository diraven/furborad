import React from 'react';
import Case from './Case';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import {ICase} from "./Case/Case";

export default function Dashboard({cases}: { cases: ICase[] }) {
    return (
        <Container className="pt-5">
            <Row>
                {
                    React.Children.map(cases, (c) =>
                        <Col className={'p-1'} md={4}><Case case={c}/></Col>)
                }
            </Row>
        </Container>
    );
}

Dashboard.propTypes = {
    cases: PropTypes.arrayOf(PropTypes.object),
};
