import React, {Dispatch} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Messages from "./Case/Messages";
import IRat from "../state/Rat";
import ICase from "../state/Case";
import Case from "./Case";

// function getFreeCaseNumber(cases: ICase[]): number {
//     return cases.reduce((max: number, theCase: ICase) => {
//         if (max < theCase.case_number) {
//             return theCase.case_number
//         }
//         return max
//     }, 100) + 1;
// }

interface IDashboardProps {
    dispatch: Dispatch<any>
    cases: ICase[]
    rats: IRat[]
    messages: string[]
}

export default function Dashboard(props: IDashboardProps) {
    const {dispatch, cases, rats, messages} = props
    return (
        <div className="container-fluid h-100">
            <div className="row h-100">
                <div className="col-12 col-xl-6 h-100">
                    <Messages messages={messages}/>
                </div>
                <main className="col overflow-auto h-100">
                    <table className="table cases w-100">
                        <tbody>
                            {cases.map((theCase) =>
                                <Case
                                    key={theCase.caseNumber}
                                    dispatch={dispatch}
                                    case={theCase}
                                    rats={rats.filter(rat => theCase.caseNumber === rat.caseNumber)}
                                    messages={messages.filter(message =>
                                        [
                                            ...rats.filter(rat => theCase.caseNumber === rat.caseNumber).map(
                                                rat => rat.ircNick
                                            ),
                                            ...rats.filter(rat => theCase.caseNumber === rat.caseNumber).map(
                                                rat => rat.cmdr
                                            ),
                                            `#${theCase.caseNumber}`,
                                            `${theCase.ircNick}`,
                                            `${theCase.cmdr}`,
                                        ].some(sub => message.toLowerCase().includes(sub.toLowerCase()))
                                    )}
                                />
                            )}
                        </tbody>
                    </table>
                    <Row>
                    </Row>
                </main>
            </div>
        </div>
    );
}
