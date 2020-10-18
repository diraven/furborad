import React, {Dispatch} from 'react';
import Card from 'react-bootstrap/Card';
import {ICase} from './Case';
import {ACTIONS} from "../../App";

interface IHeaderProps {
    'dispatch': Dispatch<any>
    'case_id': number
    'case': ICase
}

export default function Header(props: IHeaderProps) {
    const {dispatch, case_id, 'case': theCase} = props
    return (
        <Card.Header>
            <strong>#{theCase.case_number}</strong>&nbsp;
            {theCase.platform} |&nbsp;
            {theCase.language} |&nbsp;
            {theCase.commander_name}
        </Card.Header>
    );
}
