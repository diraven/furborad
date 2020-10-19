import React, {Dispatch, useEffect} from 'react';
// @ts-ignore
import IRC from 'irc-framework';

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
    dispatch: Dispatch<any>
}

export default function IRCClient(props: IIRCClientProps) {
    const {dispatch} = props

    useEffect(() => {
        let client = new IRC.Client();
        client.connect(CREDENTIALS);
        client.on('connected', function (event: any) {
            console.log('connected')
            client.join(CREDENTIALS.channel);
        })

        client.on('message', function (event: any) {
            console.log(event)
            // if (event.message.indexOf('hello') === 0) {
            //     event.reply('Hi!');
            // }
        });
    })

    return (<></>);
}
