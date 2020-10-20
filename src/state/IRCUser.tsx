import React from 'react';

export default interface IIRCUser {
    [key: string]: string | boolean | null | number | string[]

    away: boolean
    channel: string
    channel_modes: string[]
    hostname: string
    ident: string
    nick: string
    num_hops_away: number
    real_name: number
    server: number
}
