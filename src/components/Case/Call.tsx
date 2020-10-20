import React from 'react';
import Button from 'react-bootstrap/Button';
import IRat from "../../state/Rat";

interface ICallProps {
    rat: IRat
    name: string
    value: boolean | null
    setRatProperty: (ircNick: string, name: string, value: any) => void
}

export default function Call(props: ICallProps) {
    const {rat, name, value, setRatProperty} = props
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
            setRatProperty(rat.ircNick, name, !value)
        }}>{name}</Button>
    );
}
