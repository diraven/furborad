import React from 'react';
import Button from 'react-bootstrap/Button';

interface ICallProps {
    caseId: number
    ratId: string
    name: string
    value: boolean | null
}

export default function Call(props: ICallProps) {
    const {caseId, ratId, name, value} = props
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
        <Button variant={variant} onClick={() => {
            // dispatch({
            //     type: ACTIONS.SET_RAT_PROPERTY,
            //     payload: {
            //         caseId: caseId,
            //         ratId: ratId,
            //         name: name,
            //         value: !value,
            //     },
            // });
        }}>{name}</Button>
    );
}
