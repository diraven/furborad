import React, {Dispatch} from 'react';
import Card from 'react-bootstrap/Card';
import System from './System';
import Header from './Header';
import Messages from "./Messages";
import Rat from "./Rat";
import ICase from "../../state/Case";
import IRat from "../../state/Rat";

interface ICaseProps {
    dispatch: Dispatch<any>
    case: ICase
    rats: IRat[]
    messages: string[]
}

export default function Case(props: ICaseProps) {
    const {dispatch, 'case': theCase, rats, messages} = props
    return (
        <Card border={'primary'}>
            <Header dispatch={dispatch} case={theCase}/>
            <Card.Body>
                <System name={theCase.systemName} landmark={theCase.systemLandmark}/>
                {
                    rats.map((x) =>
                        <Rat key={theCase.caseNumber} dispatch={dispatch} case={theCase} rat={x}/>
                    )
                }
                <Messages messages={messages}/>
            </Card.Body>
        </Card>
    );
}
