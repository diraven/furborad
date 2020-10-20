import React, {useState} from 'react';
import './App.css';
import Dashboard from "./components/Dashboard";
import update from 'immutability-helper';
import IRCClient from "./components/IRCClient";
import State from "./state/State";


function App() {
    const [state, setState] = useState(State)

    function addMessage(text: string) {
        setState(state => update(state, {messages: {$push: [text]}}))
    }

    return (
        <>
            <link
                rel='stylesheet'
                href='https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/slate/bootstrap.min.css'
            />
            <Dashboard
                cases={state.cases}
                rats={state.rats}
                messages={state.messages}
            />
            <IRCClient addMessage={addMessage}/>
        </>
    );
}

export default App;
