import React from 'react';

export default interface IRat {
    [key: number]: string | boolean | null | number

    caseNumber: number
    cmdr: string
    ircNick: string
    fr: boolean | null
    mmc: boolean | null
    wr: boolean | null
    sys: boolean | null
    pos: boolean | null
    bc: boolean | null
    fuel: boolean | null
}
