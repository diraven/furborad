import React, {useReducer} from 'react';
import './App.css';
import initialState, {IState} from "./InitialState";
import Dashboard from "./components/Dashboard";
import update from 'immutability-helper';

type StateAction = {
    type: string;
    payload: setRatCallActionPayload;
}

interface setRatCallActionPayload {
    case_id: number
    rat_id: number
    name: string
    value: boolean | null
}

const ACTIONS = {
    SET_RAT_CALL: 'SET_RAT_CALL',
};

export {ACTIONS};

function reducer(state: IState, action: StateAction): IState {
    switch (action.type) {
        case ACTIONS.SET_RAT_CALL:
            const {case_id, rat_id, name, value} = action.payload;
            return update(state, {cases: {[case_id]: {rats: {[rat_id]: {[name]: {$set: value}}}}}})
        default:
            console.log('Unhandled action: ' + action.type);
            return state
    }
}


function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <link
                rel='stylesheet'
                href='https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/slate/bootstrap.min.css'
            />
            <Dashboard dispatch={dispatch} cases={state.cases}/>
        </>
    );
}

export default App;
