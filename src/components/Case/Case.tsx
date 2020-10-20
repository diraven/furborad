import React from 'react';
import Messages from "./Messages";
import Rat from "./Rat";
import ICase from "../../state/Case";
import IRat from "../../state/Rat";
import {Button, OverlayTrigger, Popover} from "react-bootstrap";

interface ICaseProps {
    case: ICase
    rats: IRat[]
    messages: string[]
    setRatProperty: (ircNick: string, name: string, value: any) => void
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
    const {'case': theCase, rats, messages, setRatProperty} = props

    const popover = (
        <Popover className='case-context' id={`case-${theCase.caseNumber}-context`}>
            <Popover.Title as="h3">Case #{theCase.caseNumber}</Popover.Title>
            <Popover.Content>
                <Messages messages={messages.slice().reverse()}/>
            </Popover.Content>
        </Popover>
    );

    return (
        <tr className={`case${theCase.cr ? ' border border-danger' : ''}`}>
            <td style={{width: 200}}>
                <OverlayTrigger rootClose trigger="click" placement="right" overlay={popover}>
                    <Button className='float-right' variant='primary' size='sm'>context</Button>
                </OverlayTrigger>
                <h1 className={theCase.cr ? ' text-danger' : ''}>
                    #{theCase.caseNumber}
                </h1>
                {theCase.cmdr}
                <p>{formatPlatform(theCase.platform)} | {theCase.language}</p>
                <p className={`m-0 ${theCase.systemLandmark ? 'text-success' : 'text-warning'}`}>{theCase.systemName}</p>
                {theCase.systemLandmark && <p className='text-muted m-0'>{theCase.systemLandmark}</p>}
            </td>
            <td style={{width: 300}}>
                {(rats.length > 0 &&
                    rats.map((rat) =>
                        <Rat key={rat.ircNick} case={theCase} rat={rat} setRatProperty={setRatProperty}/>
                    )
                ) || (
                    <Messages messages={messages.filter(msg => msg.match(/(\d+j|stdn|jumps?)/i))}/>
                )}
            </td>
            <td>
                <Button size='sm' variant='primary'>!pcwr-en</Button>
                <Button size='sm' variant='primary'>!pcwr-de</Button>
                <Button size='sm' variant='primary'>!pcquit</Button>
                <Button size='sm' variant='primary'>!pcquit-de</Button>
            </td>
        </tr>
    );
}
