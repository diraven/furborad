import React, {Dispatch} from 'react';
import Case, {ICase} from './Case';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// function getFreeCaseNumber(cases: ICase[]): number {
//     return cases.reduce((max: number, theCase: ICase) => {
//         if (max < theCase.case_number) {
//             return theCase.case_number
//         }
//         return max
//     }, 100) + 1;
// }
interface IDashboardProps {
    dispatch: Dispatch<any>,
    cases: ICase[],
}

export default function Dashboard(props: IDashboardProps) {
    return (
        <Container className="pt-5">
            <Row>
                {
                    props.cases.map(
                        (c) => <Col className={'p-1'} md={4}><Case key={c.case_number} case={c}/></Col>
                    )
                }
            </Row>
        </Container>
    );
}
