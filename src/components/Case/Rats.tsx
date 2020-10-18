import React, {Dispatch} from 'react';
import Rat, {IRat} from './Rat';
import Card from 'react-bootstrap/Card';
import {ICase} from "./Case";

export interface IRats extends Array<IRat> {
}

interface IRatsProps {
    dispatch: Dispatch<any>
    case_id: number,
    'case': ICase
    rats: IRats
}

export default function Rats(props: IRatsProps) {
    const {dispatch, case_id, case: theCase, rats} = props
    return (
        <Card.Text>
            {rats.map((x, i) => <Rat key={i} dispatch={dispatch} case_id={case_id} case={theCase} rat_id={i} rat={x}/>)}
        </Card.Text>
    );
}
