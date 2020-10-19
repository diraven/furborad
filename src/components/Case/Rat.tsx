import React, {Dispatch} from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Call from './Call';
import IRat from "../../state/Rat";
import ICase from "../../state/Case";


interface IRatProps {
    dispatch: Dispatch<any>
    case: ICase
    rat: IRat
}

export default function Rat(props: IRatProps) {
    const {dispatch, case: theCase, rat} = props
    return (
        <>
            {rat.ircNick}
            <div className='m-0 p-0'>
                <ButtonGroup size={'sm'} aria-label='Basic example'>
                    <Call dispatch={dispatch} caseId={theCase.caseNumber} ratId={rat.ircNick} name={'fr'}
                        value={rat.fr}/>
                    {theCase.cr &&
                    <Call dispatch={dispatch} caseId={theCase.caseNumber} ratId={rat.ircNick} name={'mmconf'}
                        value={rat.mmc}/> &&
                    <Call dispatch={dispatch} caseId={theCase.caseNumber} ratId={rat.ircNick} name={'sys'}
                        value={rat.sys}/> &&
                    <Call dispatch={dispatch} caseId={theCase.caseNumber} ratId={rat.ircNick} name={'pos'}
                        value={rat.pos}/>}
                    <Call dispatch={dispatch} caseId={theCase.caseNumber} ratId={rat.ircNick} name={'wr'}
                        value={rat.wr}/>
                    <Call dispatch={dispatch} caseId={theCase.caseNumber} ratId={rat.ircNick} name={'bc'}
                        value={rat.bc}/>
                    <Call dispatch={dispatch} caseId={theCase.caseNumber} ratId={rat.ircNick} name={'fuel'}
                        value={rat.fuel}/>
                </ButtonGroup>
            </div>
        </>
    );
}
