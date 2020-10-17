import React from 'react';
import Button from 'react-bootstrap/Button';

interface ICallProps {
    name: string
    value: boolean | null
}

export default function Call(props: ICallProps) {
    const {name, value} = props
    let variant;
    switch (value) {
        case true:
            variant = 'success';
            break;
        case false:
            variant = 'danger';
            break;
        default:
            variant = 'secondary';
    }
    return (
        <Button variant={variant}>{name}</Button>
    );
}
