import React from 'react';
import Button from 'react-bootstrap/Button'

export default function Call({value, name}) {
    let variant = ''
    switch (value) {
        case 1:
            variant = 'success'
            break;
        case -1:
            variant = 'danger'
            break;
        default:
            variant = 'secondary'
    }
    return (
        <Button variant={variant}>{name}</Button>
    );
}
