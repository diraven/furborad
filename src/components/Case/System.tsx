import React from 'react';
import Card from 'react-bootstrap/Card';

export interface ISystem {
    name: string
    landmark: string
}


export default function System({system}: { system: ISystem }) {
    const className = 'mb-2 ' + (
        system.landmark ? 'text-success' : 'text-warning'
    );
    return (
        <>
            <Card.Subtitle className={className}>{system.name}</Card.Subtitle>
            {
                system.landmark &&
                <Card.Subtitle className='mb-2 text-muted'>35 ly from fuelum</Card.Subtitle>
            }
        </>
    );
}
