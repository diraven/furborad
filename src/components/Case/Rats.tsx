import React from 'react';
import Rat, {IRat} from './Rat';
import Card from 'react-bootstrap/Card';

interface IRatsProps {
    rats: IRat[]
}

export default function Rats(props: IRatsProps) {
    const {rats} = props
    return (
        <Card.Text>
            {rats.map((r) => <Rat key={r.irc_nick} rat={r}/>)}
        </Card.Text>
    );
}
