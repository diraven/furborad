import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Call from './Call';
import {ICase} from "./Case";

export interface IRat {
    commander_name: string
    irc_nick: string
    fr: boolean | null
    mmc: boolean | null
    wr: boolean | null
    sys: boolean | null
    pos: boolean | null
    bc: boolean | null
    fuel: boolean | null
}

interface IRatProps {
    case: ICase
    rat: IRat
}

export default function Rat(props: IRatProps) {
    const {rat, case: theCase} = props
    return (
        <div className={'p-1'}>
            <p className={'m-0'}>{rat.irc_nick}</p>
            <p className={'m-0'}>
                <ButtonGroup size={'sm'} aria-label='Basic example'>
                    <Call name={'fr'} value={rat.fr}/>
                    {theCase.cr &&
                    <Call name={'mmconf'} value={rat.mmc}/> &&
                    <Call name={'sys'} value={rat.sys}/> &&
                    <Call name={'pos'} value={rat.pos}/>}
                    <Call name={'wr'} value={rat.wr}/>
                    <Call name={'bc'} value={rat.bc}/>
                    <Call name={'fuel'} value={rat.fuel}/>
                </ButtonGroup>
            </p>
        </div>
    );
}
