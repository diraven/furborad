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

    // function setCaseProperty(caseNumber: number, name: string, value: any) {
    //     setState(state => {
    //         let caseIdx = state.cases.findIndex((c) => c.caseNumber === caseNumber)
    //         if (caseIdx) {
    //             let theCase = update(state.cases[caseIdx], {[name]: {$set: value}})
    //             return update(state, {cases: {[caseIdx]: {$set: theCase}}})
    //         }
    //         console.log(`Case not found: "${caseNumber}"`)
    //         return state
    //     })
    // }

    function setRatProperty(ircNick: string, name: string, value: any) {
        setState(state => {
            let ratIdx = state.rats.findIndex((r) => r.ircNick === ircNick)
            console.log(ratIdx)
            if (ratIdx) {
                let rat = update(state.rats[ratIdx], {[name]: {$set: value}})
                return update(state, {rats: {[ratIdx]: {$set: rat}}})
            }
            console.log(`Rat not found: "${ircNick}"`)
            return state
        })
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
                setRatProperty={setRatProperty}
            />
            <IRCClient addMessage={addMessage}/>
        </>
    );
}

export default App;
