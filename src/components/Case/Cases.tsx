import React, {Dispatch} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Case, {ICase} from "./Case";

export interface ICases extends Array<ICase> {
}

interface ICasesProps {
    dispatch: Dispatch<any>
    cases: ICases
}

export default function Cases(props: ICasesProps) {
    const {dispatch, cases} = props
    return (
        <Container className="pt-5">
            <Row>
                {cases.map((x, i) => <Col className={'p-1'} md={4}>
                    <Case key={i} dispatch={dispatch} case_id={i} case={x}/>
                </Col>)}
            </Row>
        </Container>
    );
}
