import React, {Dispatch} from 'react';
import Case from './Case';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ICase} from "./Case";

// function getFreeCaseNumber(cases: ICase[]): number {
//     return cases.reduce((max: number, theCase: ICase) => {
//         if (max < theCase.case_number) {
//             return theCase.case_number
//         }
//         return max
//     }, 100) + 1;
// }

export default function Dashboard({dispatch, cases}: { dispatch: Dispatch<any>, cases: ICase[] }) {
    return (
        <Container className="pt-5">
            <Row>
                {
                    cases.map(
                        (c) => <Col className={'p-1'} md={4}><Case key={c.case_number} case={c}/></Col>
                    )
                }
            </Row>
        </Container>
    );
}
