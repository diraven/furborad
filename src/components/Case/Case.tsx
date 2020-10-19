import React, {Dispatch} from 'react';
import Messages from "./Messages";
import Rat from "./Rat";
import ICase from "../../state/Case";
import IRat from "../../state/Rat";
import {Button, OverlayTrigger, Popover} from "react-bootstrap";

interface ICaseProps {
    dispatch: Dispatch<any>
    case: ICase
    rats: IRat[]
    messages: string[]
}

function formatPlatform(platform: string): JSX.Element {
    platform = platform.toUpperCase()
    let className
    switch (platform) {
        case 'XB':
            className = 'text-success'
            break
        case 'PS':
            className = 'text-info'
            break
        default:
            className = 'text-default'
            break
    }
    return <span className={className}>{platform}</span>
}

export default function Case(props: ICaseProps) {
    const {dispatch, 'case': theCase, rats, messages} = props

    const popover = (
        <Popover className='case-context' id={`case-${theCase.caseNumber}-context`}>
            <Popover.Title as="h3">Case #{theCase.caseNumber}</Popover.Title>
            <Popover.Content>
                <Messages messages={messages.reverse()}/>
            </Popover.Content>
        </Popover>
    );

    return (
        <tr className='case'>
            <td style={{width: 200}}>
                <OverlayTrigger rootClose trigger="click" placement="right" overlay={popover}>
                    <Button className='float-right' variant='primary' size='sm'>context</Button>
                </OverlayTrigger>
                <h1>
                    #{theCase.caseNumber}
                </h1>
                {theCase.cmdr}
                <p>{formatPlatform(theCase.platform)} | {theCase.language}</p>
                <p className={`m-0 ${theCase.systemLandmark ? 'text-success' : 'text-warning'}`}>{theCase.systemName}</p>
                {theCase.systemLandmark && <p className='text-muted m-0'>{theCase.systemLandmark}</p>}
            </td>
            <td  style={{width: 200}}>
                {
                    rats.map((x) =>
                        <Rat key={theCase.caseNumber} dispatch={dispatch} case={theCase} rat={x}/>
                    )
                }
            </td>
            <td>
                Suggestions: !pcwr-en !pcwr-ru
            </td>
        </tr>
    );
}
