export default interface IIRCMessage {
    account?: string
    from_server: boolean
    group?: string
    hostname: string
    ident: string
    message: string
    nick: string
    target: string
    type: string
}
