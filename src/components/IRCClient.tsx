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
}

const CREDENTIALS: IIRCClientCredentials = {
    host: 'localhost',
    port: 8010,
    path: '/webirc/websocket/',
    nick: 'DiRaven[FuRBoard]',
}

interface IIRCClientProps {
    dispatch: Dispatch<any>
}

export default function IRCClient(props: IIRCClientProps) {
    const {dispatch} = props

    useEffect(() => {
        let client = new IRC.Client();
        client.connect(CREDENTIALS);
        // https://kiwi.fuelrats.com:4443/webirc/kiwiirc/"
        client.on('connected', function (event: any) {
            console.log('connected')
            client.join('#ratchat');
        })

        client.on('message', function (event: any) {
            console.log(event)
            // if (event.message.indexOf('hello') === 0) {
            //     event.reply('Hi!');
            // }

            if (event.message.match(/^!join /)) {
                // let to_join = event.message.split(' ');
                // event.reply('Joining ' + to_join + '..');
                // client.join('#ratchat');
            }
        });
    })

    return (<></>);
}


// Or a quicker to match messages...
//         client.matchMessage(/^hi/, function(event: any) {
//             event.reply('hello there!');
//         });

// console.log('connect')
// const stream = createIrcStream(CREDENTIALS)
//
// // dispatch({
// //     type: 'REQUEST_CONNECTION_PENDING',
// //     connection: {
// //         id,
// //         isConnected: false,
// //         isWelcome: false,
// //         nickname,
// //         realName,
// //         server,
// //         port,
// //         stream,
// //         error: null,
// //         conversations: null
// //     }
// // })
//
// stream.on('errors', (e: any) => {
//     console.log(e)
//     // dispatch({type: 'IRC_ERROR', connectionId: id, message: e.message})
// })
//
// stream.on('mode', (e) => {
//     console.log('mode', e)
// })
//
// stream.on('invite', (e: any) => {
//     console.log('invite', e)
// })
//
// stream.on('notice', (e) => {
//     console.log('notice', e)
//
//     // const channelInMessage = getChannelFromNotice(e.message)
//     //
//     // var to, message
//     // if (channelInMessage) {
//     //     const splitMessage = e.message.split(' ')
//     //     splitMessage.shift() // remove leading channel name
//     //
//     //     to = channelInMessage
//     //     message = splitMessage.join(' ')
//     // } else {
//     //     to = e.to
//     //     message = e.message
//     // }
//     //
//     // dispatch({
//     //     type: 'RECEIVE_NOTICE',
//     //     connectionId: id,
//     //     from: e.from,
//     //     to,
//     //     message
//     // })
// })
//
// stream.on('away', (e) => {
//     console.log('away', e)
//     // dispatch({
//     //     type: 'RECEIVE_AWAY',
//     //     connectionId: id,
//     //     nick: e.nick,
//     //     message: e.message
//     // })
// })
//
// stream.on('part', (e) => {
//     console.log('part', e)
//     // dispatch({
//     //     type: 'RECEIVE_PART',
//     //     connectionId: id,
//     //     nick: e.nick,
//     //     message: e.message,
//     //     channels: e.channels
//     // })
// })
//
// stream.on('quit', (e) => {
//     console.log('quit', e)
//     // dispatch({
//     //     type: 'RECEIVE_QUIT',
//     //     connectionId: id,
//     //     nick: e.nick,
//     //     message: e.message
//     // })
// })
//
// stream.on('kick', (e: any) => {
//     console.log('kick', e)
// })
//
// stream.on('motd', (e) => {
//     console.log('motd', e)
//     // dispatch({
//     //     type: 'RECEIVE_MOTD',
//     //     connectionId: id,
//     //     motd: e.motd.join('\n')
//     // })
// })
//
// stream.on('welcome', (e) => {
//     console.log('welcome', e)
//     //
//     // dispatch({
//     //     type: 'RECEIVE_WELCOME',
//     //     connectionId: id,
//     //     nick
//     // })
// })
//
// stream.on('nick', (e) => {
//     console.log('nick', e)
//     // dispatch({
//     //     type: 'RECEIVE_NICK',
//     //     connectionId: id,
//     //     oldNickname: e.nick,
//     //     newNickname: e.new
//     // })
// })
//
// stream.on('topic', (e) => {
//     console.log('topic', e)
//     // dispatch({
//     //     type: 'RECEIVE_TOPIC',
//     //     connectionId: id,
//     //     channel: e.channel,
//     //     topic: e.topic
//     // })
// })
//
// stream.on('join', (e) => {
//     console.log('join', e)
//     // dispatch({
//     //     type: 'RECEIVE_JOIN',
//     //     connectionId: id,
//     //     channel: e.channel,
//     //     from: e.nick
//     // })
// })
//
// stream.on('names', (e: any) => {
//     console.log('names', e)
//     // dispatch({
//     //     type: 'RECEIVE_NAMES',
//     //     connectionId: id,
//     //     channel: e.channel,
//     //     names: e.names
//     // })
// })
//
// stream.on('message', (e) => {
//     if (e.message.trim().startsWith('\u0001ACTION')) {
//         console.log('action', e)
//         // dispatch({
//         //     type: 'RECEIVE_ACTION',
//         //     connectionId: id,
//         //     channel: equalNames(e.to, nickname) ? e.from : e.to,
//         //     from: e.from,
//         //     message: `${e.from} ${e.message
//         //         /* eslint-disable no-control-regex */
//         //         .replace(/^\u0001ACTION /, '')
//         //         /* eslint-disable no-control-regex */
//         //         .replace(/\u0001$/, '')}`
//         // })
//     } else if (e.to.toLowerCase() === CREDENTIALS.nickName.toLowerCase()) {
//         console.log('direct msg', e)
//         // dispatch({
//         //     type: 'RECEIVE_DIRECT_MESSAGE',
//         //     connectionId: id,
//         //     from: e.from,
//         //     message: e.message
//         // })
//     } else {
//         console.log('channel msg', e)
//         // dispatch({
//         //     type: 'RECEIVE_CHANNEL_MESSAGE',
//         //     connectionId: id,
//         //     channel: e.to,
//         //     from: e.from,
//         //     message: e.message
//         // })
//     }
// })
// }, [])

// }


// import net from 'net'
// import irc from 'slate-irc'
//
// export const CONNECTION_CLOSED = 'CONNECTION_CLOSED'
//
// function any<A>(list: Array<A>, predicate: (val: A) => boolean): boolean {
//     for (let i = 0; i < list.length; i++) {
//         if (predicate(list[i])) {
//             return true
//         }
//     }
//     return false
// }
//
// export function connectToServer() {
//     const credentials = {realName: 'FuRBoard', nickname: 'FuRBoard', server: 'irc.freenode.net', port: '6667'}
//
//     return (dispatch, getState) => {
//     }
// }

// function createIrcStream(credentials: IIRCClientCredentials) {
//     const {host, port, nickName, password, realName} = credentials
//     const socket = net.connect({port, host: host})
//     socket
//         .on('timeout', () => {
//             console.log('socket timeout')
//         })
//         .on('end', (e: any) => {
//             console.log('socket end', e)
//         })
//         .on('connect', (e: any) => {
//             console.log('connected: ', e)
//         })
//         .on('close', (e: any) => {
//             console.log('connection closed: ', e)
//         })
//         .on('error', (e:any ) => {
//             console.log('socket error', e)
//         })
//     const stream = irc(socket)
//     if (password) stream.pass(password)
//     stream.nick(nickName)
//     stream.user(nickName, realName)
//     stream.join('#diraven')
//     return stream
// }

// const leadingChannelName = /^\[(#\S+)\]/
//
// function getChannelFromNotice(message) {
//     const match = message.match(leadingChannelName)
//     return match ? match[1] : null
// }
