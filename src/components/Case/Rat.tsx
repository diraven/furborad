import React, {Dispatch} from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Call from './Call';
import {ICase} from "./Case";

export interface IRat {
    [key: string]: string | boolean | null
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
    dispatch: Dispatch<any>
    case_id: number
    case: ICase
    rat_id: number
    rat: IRat
}

export default function Rat(props: IRatProps) {
    const {dispatch, case_id, case: theCase, rat_id, rat} = props
    return (
        <div className={'p-1'}>
            <p className={'m-0'}>{rat.irc_nick}</p>
            <p className={'m-0'}>
                <ButtonGroup size={'sm'} aria-label='Basic example'>
                    <Call dispatch={dispatch} case_id={case_id} rat_id={rat_id} name={'fr'} value={rat.fr}/>
                    {theCase.cr &&
                    <Call dispatch={dispatch} case_id={case_id} rat_id={rat_id} name={'mmconf'} value={rat.mmc}/> &&
                    <Call dispatch={dispatch} case_id={case_id} rat_id={rat_id} name={'sys'} value={rat.sys}/> &&
                    <Call dispatch={dispatch} case_id={case_id} rat_id={rat_id} name={'pos'} value={rat.pos}/>}
                    <Call dispatch={dispatch} case_id={case_id} rat_id={rat_id} name={'wr'} value={rat.wr}/>
                    <Call dispatch={dispatch} case_id={case_id} rat_id={rat_id} name={'bc'} value={rat.bc}/>
                    <Call dispatch={dispatch} case_id={case_id} rat_id={rat_id} name={'fuel'} value={rat.fuel}/>
                </ButtonGroup>
            </p>
        </div>
    );
}
