import React, {useReducer} from 'react';
import './App.css';
import initialState, {IState} from "./InitialState";
import Dashboard from "./components/Dashboard";
import update from 'immutability-helper';
import IRCClient from "./components/IRCClient";

type StateAction = {
    type: string
    payload: setRatPropertyActionPayload | setCasePropertyActionPayload
}

interface setPropertyActionPayload {
    name: string
    value: any
}

interface setCasePropertyActionPayload extends setPropertyActionPayload {
    case_id: number
}

interface setRatPropertyActionPayload extends setCasePropertyActionPayload {
    rat_id: number
}

const ACTIONS = {
    SET_RAT_PROPERTY: 'SET_RAT_PROPERTY',
    SET_CASE_PROPERTY: 'SET_CASE_PROPERTY',
};

export {ACTIONS};

function reducer(state: IState, action: StateAction): IState {
    let newState
    switch (action.type) {
        case ACTIONS.SET_CASE_PROPERTY:
            // const {case_id, name, value} = action.payload;
            // return update(state, {cases: {[case_id]: {rats: {[rat_id]: {[name]: {$set: value}}}}}})
            return state
        case ACTIONS.SET_RAT_PROPERTY:
            const {case_id, rat_id, name, value} = action.payload as setRatPropertyActionPayload;
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
            <IRCClient dispatch={dispatch}/>
        </>
    );
}

export default App;
