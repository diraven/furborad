import React from 'react';
import Card from 'react-bootstrap/Card';
import {ICase} from './Case';

interface IHeaderProps {
    'case': ICase
}

export default function Header(props: IHeaderProps) {
    const {'case': theCase} = props
    return (
        <Card.Header>
            <strong>#{theCase.case_number}</strong>&nbsp;
            {theCase.platform} |&nbsp;
            {theCase.language} |&nbsp;
            {theCase.commander_name}
        </Card.Header>
    );
}
