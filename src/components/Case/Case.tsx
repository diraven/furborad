import React from 'react';
import Card from 'react-bootstrap/Card';
import System, {ISystem} from './System';
import Notes from './Notes';
import Header from './Header';
import Rats from './Rats';
import {IRat} from "./Rat";

export interface ICase {
    case_number: number
    commander_name: string
    irc_nick: string
    system: ISystem
    language: string
    platform: string
    cr: boolean | null
    rats: IRat[]
    notes: string[]
}

interface ICaseProps {
    case: ICase
}

export default function Case(props: ICaseProps) {
    const {'case': theCase} = props
    return (
        <Card border={'primary'}>
            <Header case={theCase}/>
            <Card.Body>
                <System system={theCase.system}/>
                <Rats case={theCase} rats={theCase.rats}/>
                <Notes notes={theCase.notes}/>
            </Card.Body>
        </Card>
    );
}
