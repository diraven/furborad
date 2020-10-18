import React, {Dispatch} from 'react';
import Button from 'react-bootstrap/Button';
import {ACTIONS} from "../../App";

interface ICallProps {
    dispatch: Dispatch<any>
    case_id: number
    rat_id: number
    name: string
    value: boolean | null
}

export default function Call(props: ICallProps) {
    const {dispatch, case_id, rat_id, name, value} = props
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
                type: ACTIONS.SET_RAT_CALL,
                payload: {
                    case_id: case_id,
                    rat_id: rat_id,
                    name: name,
                    value: !value,
                },
            });
        }}>{name}</Button>
    );
}
