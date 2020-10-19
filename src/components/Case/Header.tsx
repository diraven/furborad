import React, {Dispatch} from 'react';
import Card from 'react-bootstrap/Card';
import ICase from "../../state/Case";

interface IHeaderProps {
    'dispatch': Dispatch<any>
    'case': ICase
}

export default function Header(props: IHeaderProps) {
    const {dispatch, 'case': theCase} = props
    return (
        <Card.Header>
            <strong>#{theCase.caseNumber}</strong>&nbsp;
            {theCase.platform} |&nbsp;
            {theCase.language} |&nbsp;
            {theCase.cmdr}
        </Card.Header>
    );
}
