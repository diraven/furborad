import React from 'react';
import Card from 'react-bootstrap/Card';
import {ICase} from "./Case";

export default function Header({'case': theCase}: { case: ICase }) {
    return (
        <Card.Header>
            <strong>#1</strong>&nbsp;
            {theCase.platform} |&nbsp;
            {theCase.language} |&nbsp;
            {theCase.commander_name}
        </Card.Header>
    );
}
