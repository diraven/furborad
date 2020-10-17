import React from 'react';
import Card from 'react-bootstrap/Card';

export default function System({system}) {
    let state = system.is_confirmed ? "text-success" : "text-warning"
    let className = "mb-2 " + state
    return (
        <>
            <Card.Subtitle className={className}>{system.name}</Card.Subtitle>
            {system.is_confirmed && <Card.Subtitle className="mb-2 text-muted">35 ly from fuelum</Card.Subtitle>}
        </>
    );
}
