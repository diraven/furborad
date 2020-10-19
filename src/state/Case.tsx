import React from 'react';

export default interface ICase {
    [key: number]: string | number | boolean | null

    caseNumber: number
    cmdr: string
    ircNick: string
    systemName: string
    systemLandmark: string
    language: string
    platform: string
    cr: boolean | null
}
