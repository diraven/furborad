import React, {useReducer} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import InitialState from "./InitialState";

const ACTIONS = {
    CREATE_CASE: 'CREATE_CASE',
    DELETE_CASE: 'DELETE_CASE',
    CREATE_MESSAGE: 'ADD_MESSAGE',
}

function reducer(state, action) {

}

function App() {
    const [state, dispatch] = useReducer(reducer, InitialState);

    function addMessage(case_id, author, text) {
        dispatch({type: ACTIONS.CREATE_MESSAGE, payload: {author: 'test1', text: 'test2'}})
    }

    function updateVeryNestedField(state, action) {
        return {
            ...state,
            first: {
                ...state.first,
                second: {
                    ...state.first.second,
                    [action.someId]: {
                        ...state.first.second[action.someId],
                        fourth: action.someValue
                    }
                }
            }
        }
    }

    return (
        <>
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/slate/bootstrap.min.css"
            />
            <Dashboard dispatch={dispatch} cases={state.cases}/>
        </>
    );
}

export default App;
