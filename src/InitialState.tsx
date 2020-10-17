import {ICase} from "./components/Case";

export interface IState {
    cases: ICase[]
}

const initialState: IState = {
    cases: [
        {
            'case_number': 1,
            'commander_name': 'Divine Raven',
            'irc_nick': 'Divine_Raven',
            'system': {
                'name': 'Fuelum 123',
                'landmark': '123ly from Fuelum',
            },
            'language': 'EN',
            'platform': 'PC',
            'sysconf': null,
            'mmconf': null,
            'prep': null,
            'non_cr': true,
            'rats': [
                {
                    'commander_name': 'Some Rat 1',
                    'irc_nick': 'Rat_1',
                    'fr': true,
                    'wr': false,
                    'bc': null,
                    'fuel': null,
                },
                {
                    'commander_name': 'Some Rat 2',
                    'irc_nick': 'Rat_2',
                    'fr': true,
                    'wr': true,
                    'bc': false,
                    'fuel': null,
                },
            ],
            'notes': [
                'DiRaven: Please exit supercruise and come to a stop. ' +
                'Keep Life Support ON, and disable all other modules you can ' +
                'disable (you can\'t disable them all - instructions ' +
                'available if needed). If an oxygen countdown timer appears ' +
                'at all let us know right away',
                'DiRaven: chat line',
                'chat line',
                'chat line',
                'chat line',
                'chat line',
                'chat line',
            ],
        },
        {
            'case_number': 2,
            'commander_name': 'Some Client',
            'irc_nick': 'Some_Client',
            'system': {
                'name': 'Sol',
                'landmark': '321ly from Fuelum',
            },
            'language': 'CH',
            'platform': 'XB',
            'sysconf': true,
            'mmconf': true,
            'prep': null,
            'non_cr': true,
            'rats': [
                {
                    'commander_name': 'Some Rat 3',
                    'irc_nick': 'Rat_3',
                    'fr': true,
                    'wr': null,
                    'bc': null,
                    'fuel': null,
                },
                {
                    'commander_name': 'Some Rat 4',
                    'irc_nick': 'Rat_4',
                    'fr': true,
                    'wr': false,
                    'bc': null,
                    'fuel': null,
                },
            ],
            'notes': [
                'DiRaven: Please exit supercruise and come to a stop. ' +
                'Keep Life Support ON, and disable all other modules you ' +
                'can disable (you can\'t disable them all - instructions ' +
                'available if needed). If an oxygen countdown timer appears ' +
                'at all let us know right away',
                'DiRaven: chat line',
                'chat line',
                'chat line',
                'chat line',
                'chat line',
                'chat line',
            ],
        },
    ],
};

export default initialState;
