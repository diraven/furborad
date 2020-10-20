import React, {Dispatch, useEffect, useState} from 'react';
// @ts-ignore
import IRC from 'irc-framework';
import IIRCUser from "../state/IRCUser";
import IIRCMessage from "../state/IRCMessage";

// function getFreeCaseNumber(cases: ICase[]): number {
//     return cases.reduce((max: number, theCase: ICase) => {
//         if (max < theCase.case_number) {
//             return theCase.case_number
//         }
//         return max
//     }, 100) + 1;
// }

interface IIRCClientCredentials {
    host: string
    port: number
    path: string
    nick: string
    channel: string
}

const CREDENTIALS: IIRCClientCredentials = {
    host: 'localhost',
    port: 8010,
    path: '/webirc/websocket/',
    nick: 'DiRaven[FuRBoard]',
    channel: '#diraven',
}

interface IIRCClientProps {
    addMessage: {(text: string): void}
}


function formatMessage(users: IIRCUser[], msg: IIRCMessage): string {
    let user = users.find(user => user.nick === msg.nick)
    console.log(users)
    console.log(msg.nick)
    console.log(user)
    let prefix = ' '
    if (user) {
        if (user.channel_modes.includes('q')) {
            prefix = '~'
        } else if (user.channel_modes.includes('a')) {
            prefix = '&'
        } else if (user.channel_modes.includes('o')) {
            prefix = '@'
        } else if (user.channel_modes.includes('h')) {
            prefix = '%'
        } else if (user.channel_modes.includes('v')) {
            prefix = '+'
        }
    }
    return `${prefix}${msg.nick || msg.hostname}: ${msg.message}`
}

export default function IRCClient(props: IIRCClientProps) {
    const {addMessage} = props
    let [users, setUsers] = useState([])

    useEffect(() => {
        let client = new IRC.Client();
        client.connect(CREDENTIALS);
        client.on('connected', function (e: any) {
            client.join(CREDENTIALS.channel);
            client.who('*', (x: any) => {
                users = x.users
                setUsers(users)
            })
        })
        client.on('join', function (e: any) {
            client.who('*', (x: any) => {
                users = x.users
                setUsers(users)
            })
        })
        client.on('message', function (e: any) {
            addMessage(formatMessage(users, e))
            console.log(e)
        });
    }, [])

    return (<></>);
}
