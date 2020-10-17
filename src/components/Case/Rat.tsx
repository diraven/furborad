import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Call from './Call';

export interface IRat {
    commander_name: string
    irc_nick: string
    fr: boolean | null
    wr: boolean | null
    bc: boolean | null
    fuel: boolean | null
}

interface IRatProps {
    rat: IRat
}

export default function Rat(props: IRatProps) {
    const {rat} = props
    return (
        <div className={'p-1'}>
            <p className={'m-0'}>{rat.irc_nick}</p>
            <p className={'m-0'}>
                <ButtonGroup size={'sm'} aria-label='Basic example'>
                    <Call name={'fr'} value={rat.fr}/>
                    <Call name={'wr'} value={rat.wr}/>
                    <Call name={'bc'} value={rat.bc}/>
                    <Call name={'fuel'} value={rat.fuel}/>
                </ButtonGroup>
            </p>
        </div>
    );
}
