import React from 'react';
import Card from 'react-bootstrap/Card';

interface ISystemProps {
    name: string
    landmark?: string
}

export default function System(props: ISystemProps) {
    const {name, landmark} = props
    const className = 'mb-2 ' + (
        landmark ? 'text-success' : 'text-warning'
    );
    return (
        <>
            <Card.Subtitle className={className}>{name}</Card.Subtitle>
            {
                landmark &&
                <Card.Subtitle className='mb-2 text-muted'>35 ly from fuelum</Card.Subtitle>
            }
        </>
    );
}
