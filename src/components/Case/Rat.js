import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Call from './Call'

export default function Rat({rat}) {
    return (
        <div className={"p-1"}>
            <p className={"m-0"}>{rat.irc_nick}</p>
            <p className={"m-0"}>
                <ButtonGroup size={"sm"} aria-label="Basic example">
                    <Call name={"fr"} value={rat.fr}/>
                    <Call name={"wr"} value={rat.wr}/>
                    <Call name={"bc"} value={rat.bc}/>
                    <Call name={"fuel"} value={rat.fuel}/>
                </ButtonGroup>
            </p>
        </div>
    );
}
