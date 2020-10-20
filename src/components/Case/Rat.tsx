import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Call from './Call';
import IRat from "../../state/Rat";
import ICase from "../../state/Case";


interface IRatProps {
    case: ICase
    rat: IRat
}

export default function Rat(props: IRatProps) {
    const {case: theCase, rat} = props
    return (
        <>
            {rat.ircNick}
            <div className='m-0 p-0'>
                <ButtonGroup size={'sm'} aria-label='Basic example'>
                    <Call caseId={theCase.caseNumber} ratId={rat.ircNick} name={'fr'}
                        value={rat.fr}/>
                    {theCase.cr &&
                    <Call caseId={theCase.caseNumber} ratId={rat.ircNick} name={'mmconf'}
                        value={rat.mmc}/> &&
                    <Call caseId={theCase.caseNumber} ratId={rat.ircNick} name={'sys'}
                        value={rat.sys}/> &&
                    <Call caseId={theCase.caseNumber} ratId={rat.ircNick} name={'pos'}
                        value={rat.pos}/>}
                    <Call caseId={theCase.caseNumber} ratId={rat.ircNick} name={'wr'}
                        value={rat.wr}/>
                    <Call caseId={theCase.caseNumber} ratId={rat.ircNick} name={'bc'}
                        value={rat.bc}/>
                    <Call caseId={theCase.caseNumber} ratId={rat.ircNick} name={'fuel'}
                        value={rat.fuel}/>
                </ButtonGroup>
            </div>
        </>
    );
}
