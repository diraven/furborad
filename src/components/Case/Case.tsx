import React, {Dispatch} from 'react';
import Card from 'react-bootstrap/Card';
import System, {ISystem} from './System';
import Notes from './Notes';
import Header from './Header';
import Rats, {IRats} from './Rats';

export interface ICase {
    [key: string]: string | number | boolean | null | string[] | ISystem | IRats
    case_number: number
    commander_name: string
    irc_nick: string
    system: ISystem
    language: string
    platform: string
    cr: boolean | null
    rats: IRats
    notes: string[]
}

interface ICaseProps {
    dispatch: Dispatch<any>
    case_id: number
    case: ICase
}

export default function Case(props: ICaseProps) {
    const {dispatch, case_id, 'case': theCase} = props
    return (
        <Card border={'primary'}>
            <Header dispatch={dispatch} case_id={case_id} case={theCase}/>
            <Card.Body>
                <System system={theCase.system}/>
                <Rats dispatch={dispatch} case_id={case_id} case={theCase} rats={theCase.rats}/>
                <Notes notes={theCase.notes}/>
            </Card.Body>
        </Card>
    );
}
