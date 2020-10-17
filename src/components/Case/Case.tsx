import React from 'react';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import System, {ISystem} from './System';
import Notes from './Notes';
import Header from './Header';
import Rats from './Rats';
import Call from './Call';
import PropTypes from 'prop-types';
import {IRat} from "./Rat";

export interface ICase {
    case_number: number
    commander_name: string
    irc_nick: string
    system: ISystem
    language: string
    platform: string
    sysconf: boolean | null
    mmconf: boolean | null
    prep: boolean | null
    non_cr: boolean | null
    rats: IRat[]
    notes: string[]
}

export default function Case({'case': theCase}: { case: ICase }) {
    return (
        <Card border={'primary'}>
            <Header case={theCase}/>
            <Card.Body>
                <System system={theCase.system}/>

                <ButtonGroup size={'sm'} aria-label='Basic example'>
                    <Call name={'mmconf'} value={theCase.mmconf}/>
                    <Call name={'sysconf'} value={theCase.sysconf}/>
                    <Call name={'prep'} value={theCase.prep}/>
                    <Call name={'fuel'} value={theCase.prep}/>
                </ButtonGroup>

                <Rats rats={theCase.rats}/>
                <Notes notes={theCase.notes}/>

            </Card.Body>
        </Card>
    );
}

Case.propTypes = {
    'case': PropTypes.object,
};