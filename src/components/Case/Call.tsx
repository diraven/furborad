import React, {Dispatch} from 'react';
import Button from 'react-bootstrap/Button';
import {ACTIONS} from "../../App";

interface ICallProps {
    dispatch: Dispatch<any>
    caseId: number
    ratId: string
    name: string
    value: boolean | null
}

export default function Call(props: ICallProps) {
    const {dispatch, caseId, ratId, name, value} = props
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
            dispatch({
                type: ACTIONS.SET_RAT_PROPERTY,
                payload: {
                    caseId: caseId,
                    ratId: ratId,
                    name: name,
                    value: !value,
                },
            });
        }}>{name}</Button>
    );
}
