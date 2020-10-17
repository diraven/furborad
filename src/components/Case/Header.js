import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Header({"case": the_case}) {
    return (
        <Card.Header>
            <strong>#1</strong> {the_case.platform} | {the_case.language} | {the_case.commander_name}
        </Card.Header>
    )
}
