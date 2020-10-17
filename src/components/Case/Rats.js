import React from 'react';
import Rat from "./Rat";
import Card from "react-bootstrap/Card";

export default function Rats({rats}) {
    return (
        <Card.Text>
            {rats.map(r => <Rat rat={r}/>)}
        </Card.Text>
    );
}
