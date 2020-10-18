import React from 'react';
import Rat, {IRat} from './Rat';
import Card from 'react-bootstrap/Card';
import {ICase} from "./Case";

interface IRatsProps {
    case: ICase
    rats: IRat[]
}

export default function Rats(props: IRatsProps) {
    const {rats, case: theCase} = props
    return (
        <Card.Text>
            {rats.map((r) => <Rat key={r.irc_nick} case={theCase} rat={r}/>)}
        </Card.Text>
    );
}
