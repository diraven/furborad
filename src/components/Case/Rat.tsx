import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Call from './Call';
import IRat from "../../state/Rat";
import ICase from "../../state/Case";


interface IRatProps {
    case: ICase
    rat: IRat
    setRatProperty: (ircNick: string, name: string, value: any) => void
}

export default function Rat(props: IRatProps) {
    const {case: theCase, rat, setRatProperty} = props
    return (
        <>
            {rat.ircNick}
            <div className='m-0 p-0'>
                <ButtonGroup size={'sm'} aria-label='Basic example'>
                    <Call rat={rat} name={'fr'} value={rat.fr} setRatProperty={setRatProperty}/>
                    {theCase.cr &&
                    <Call rat={rat} name={'mmconf'} value={rat.mmc} setRatProperty={setRatProperty}/> &&
                    <Call rat={rat} name={'sys'} value={rat.sys} setRatProperty={setRatProperty}/> &&
                    <Call rat={rat} name={'pos'} value={rat.pos} setRatProperty={setRatProperty}/>
                    }
                    <Call rat={rat} name={'wr'} value={rat.wr} setRatProperty={setRatProperty}/>
                    <Call rat={rat} name={'bc'} value={rat.bc} setRatProperty={setRatProperty}/>
                    <Call rat={rat} name={'fuel'} value={rat.fuel} setRatProperty={setRatProperty}/>
                </ButtonGroup>
            </div>
        </>
    );
}
